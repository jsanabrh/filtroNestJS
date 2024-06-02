import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesEntity } from '../entities/sales.entity';
import { Repository } from 'typeorm';
import { CreateSalesDto } from '../dtos/createSales.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SalesEntity)
    private readonly salesRepository: Repository<SalesEntity>,
  ) {}

  async createSale(createSaleDto: CreateSalesDto): Promise<SalesEntity> {
    const sale = this.salesRepository.create(createSaleDto);
    return await this.salesRepository.save(sale);
  }
}
