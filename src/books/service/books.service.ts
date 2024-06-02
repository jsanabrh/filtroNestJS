import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../dtos/createBook.dto';
import { UpdateBookDto } from '../dtos/updateBook.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async createBook(createBook: CreateBookDto): Promise<BookEntity> {
    const book = this.bookRepository.create(createBook);
    return await this.bookRepository.save(book);
  }

  async findAllBooks(): Promise<BookEntity[]> {
    return await this.bookRepository.find();
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
