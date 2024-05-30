import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { BookService } from './books/service/books.service';
import { AuthorsModule } from './authors/authors.module';
import { SalesModule } from './sales/sales.module';
import { BookController } from './books/controllers/book.controller';
import { BookEntity } from './books/entities/book.entity';
import { AuthorEntity } from './authors/entities/author.entity';
import { AuthorService } from './authors/service/author.service';
import { AuthorController } from './authors/controller/author.controller';
import { SalesEntity } from './sales/entities/sales.entity';
import { SalesService } from './sales/service/sales.service';
import { SalesController } from './sales/controller/sales.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [BookEntity, AuthorEntity, SalesEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([BookEntity, AuthorEntity, SalesEntity]),
    BooksModule,
    AuthorsModule,
    SalesModule, // Register your entities
  ],
  controllers: [BookController, AuthorController, SalesController],
  providers: [BookService, AuthorService, SalesService],
})
export class AppModule {}
