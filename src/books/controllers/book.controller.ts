import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../service/books.service';
import { CreateBookDto } from '../dtos/createBook.dto';
import { BookEntity } from '../entities/book.entity';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/createBook')
  async createBook(@Body() createBook: CreateBookDto): Promise<BookEntity> {
    return this.bookService.createBook(createBook);
  }

  @Patch('/updateBook/:bookId')
  async updateBook(
    @Param('bookId') bookId: number,
    @Body() updateBook: CreateBookDto,
  ) {
    return this.bookService.updateBook(bookId, updateBook);
  }

  @Delete('/deleteBook/:bookId')
  async softDeleteBook(
    @Param('bookId', ParseIntPipe) bookId: number,
  ): Promise<void> {
    return this.bookService.softDelete(bookId);
  }

  @Patch('restore/:bookId')
  async restoreUser(
    @Param('bookId', ParseIntPipe) bookId: number,
  ): Promise<void> {
    return this.bookService.restoreBook(bookId);
  }

  @Get('findAllBooks')
  async findAllBooks() {
    return this.bookService.findAllBooks();
  }
}
