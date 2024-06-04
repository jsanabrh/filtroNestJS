import { Module } from '@nestjs/common';
import { SalesController } from './controller/sales.controller';
import { SalesService } from './service/sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntity } from './entities/sales.entity';
import { BookEntity } from 'src/books/entities/book.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesEntity, BookEntity, UsersEntity])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
