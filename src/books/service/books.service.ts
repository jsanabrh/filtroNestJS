import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../entities/book.entity';
import { ILike, Repository } from 'typeorm';
import { CreateBookDto } from '../dtos/createBook.dto';
import { UpdateBookDto } from '../dtos/updateBook.dto';
import { AuthorEntity } from '../../authors/entities/author.entity';
import { PaginationDto } from '../dtos/pagination.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  async createBookAuthor(createBookDto: CreateBookDto): Promise<BookEntity> {
    const { idAuthor, ...bookData } = createBookDto;
    const author = await this.authorRepository.findOne({
      where: { idAuthor },
    });

    if (!author) {
      throw new NotFoundException('Author not found');
    }
    const book = this.bookRepository.create({
      ...bookData,
      idAuthor: author.idAuthor,
      nameAuthor: `${author.nameAuthor} ${author.lastNameAuthor}`,
      author: author,
    });
    return await this.bookRepository.save(book);
  }

  async findAllBooks({
    limit,
    offset,
    search,
    sortBy,
    order,
  }: PaginationDto): Promise<BookEntity[]> {
    return await this.bookRepository.find({
      where: {
        nameBook: ILike(`%${search}%`),
      },
      order: {
        [sortBy]: order,
      },
      skip: offset,
      take: limit,
    });
  }

  async updateBook(idBook: number, updateBook: UpdateBookDto): Promise<any> {
    const book = await this.bookRepository.findOne({ where: { idBook } });
    if (!book) {
      throw new NotFoundException('User not found');
    }
    await this.bookRepository.update(idBook, updateBook);

    const updateBookData = await this.bookRepository.findOne({
      where: { idBook },
    });

    return await updateBookData;
  }

  async remove(idBook: number) {
    const book = await this.bookRepository.delete({ idBook });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }
}
