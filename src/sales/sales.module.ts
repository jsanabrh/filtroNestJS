import { Module } from '@nestjs/common';
import { SalesController } from './controller/sales.controller';
import { SalesService } from './service/sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntity } from './entities/sales.entity';
import { BookEntity } from 'src/books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesEntity, BookEntity])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
