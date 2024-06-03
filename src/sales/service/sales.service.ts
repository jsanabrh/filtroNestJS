import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesEntity } from '../entities/sales.entity';
import { Repository } from 'typeorm';
import { CreateSalesDto } from '../dtos/createSales.dto';
import { BookEntity } from '../../books/entities/book.entity';
import { UsersEntity } from '../../users/entities/users.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SalesEntity)
    private readonly salesRepository: Repository<SalesEntity>,
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  /*  async createSale(createSaleDto: CreateSalesDto): Promise<SalesEntity> {
    const { bookIds } = createSaleDto;
    const books = await this.bookRepository.findByIds(bookIds);

    return await this.salesRepository.save(sale);
  } */

  async createSale(createSaleDto: CreateSalesDto): Promise<SalesEntity> {
    const { idUser, bookIds } = createSaleDto;
    const user = await this.userRepository.findOne({ where: { idUser } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const books = await this.bookRepository.findByIds(bookIds);

    if (books.length !== bookIds.length) {
      throw new NotFoundException('One or more books not found');
    }

    const sale = this.salesRepository.create({
      idUser: user.idUser,
      nameUser: `${user.nameUser} ${user.lastNameUser}`,
      user: user,
      books: books,
    });

    return await this.salesRepository.save(sale);
  }

  async findAllSales() {
    return await this.salesRepository.find({
      relations: ['books'],
    });
  }
}
