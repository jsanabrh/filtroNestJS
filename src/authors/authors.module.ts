import { Module } from '@nestjs/common';
import { AuthorController } from './controller/author.controller';
import { AuthorService } from './service/author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorsModule {}
