import { Module } from '@nestjs/common';
import { BookService } from './service/books.service';
import { BookController } from './controllers/book.controller';

@Module({
  providers: [BookService],
  controllers: [BookController],
})
export class BooksModule {}
