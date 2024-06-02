import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesEntity } from '../entities/sales.entity';
import { Repository } from 'typeorm';
import { CreateSalesDto } from '../dtos/createSales.dto';
import { BookEntity } from 'src/books/entities/book.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SalesEntity)
    private readonly salesRepository: Repository<SalesEntity>,
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async createSale(createSaleDto: CreateSalesDto): Promise<SalesEntity> {
    const { bookIds } = createSaleDto;
    const books = await this.bookRepository.findByIds(bookIds);
    const sale = new SalesEntity();
    sale.books = books;
    return await this.salesRepository.save(sale);
  }

  async findAllSales() {
    return await this.salesRepository.find({
      relations: ['books'],
    });
  }
}
