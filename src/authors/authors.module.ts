import { Module } from '@nestjs/common';
import { AuthorController } from './controller/author.controller';
import { AuthorService } from './service/author.service';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorsModule {}
