import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthorService } from '../service/author.service';
import { CreateAuthorDto } from '../dtos/createAuthor.dto';
import { AuthorEntity } from '../entities/author.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post('/createAuthor')
  async createUser(
    @Body() createAuthor: CreateAuthorDto,
  ): Promise<AuthorEntity> {
    return this.authorService.createAuthor(createAuthor);
  }

  @Get('/findAllAuthors')
  async findAllAuthors() {
    return this.authorService.findAllAuthors();
  }

  @Patch('/updateAuthor/:authorId')
  async updateAuthor(
    @Param('authorId') authorId: number,
    @Body() updateAuthor: CreateAuthorDto,
  ) {
    return this.authorService.updateAuthor(authorId, updateAuthor);
  }
}
