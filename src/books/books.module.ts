import { Module } from '@nestjs/common';
import { BookService } from './service/books.service';
import { BookController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { AuthorEntity } from 'src/authors/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
  providers: [BookService],
  controllers: [BookController],
})
export class BooksModule {}
