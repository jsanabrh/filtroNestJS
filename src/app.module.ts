import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { bookService } from './books/service/books.service';
import { AuthorsModule } from './authors/authors.module';
import { SalesModule } from './sales/sales.module';

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
      entities: [],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([]),
    BooksModule,
    AuthorsModule,
    SalesModule, // Register your entities
  ],
  controllers: [],
  providers: [bookService],
})
export class AppModule {}
