import { Module } from '@nestjs/common';
import { bookService } from './service/books.service';
import { BookController } from './controllers/book.controller';

@Module({
  providers: [bookService],
  controllers: [BookController],
})
export class BooksModule {}
