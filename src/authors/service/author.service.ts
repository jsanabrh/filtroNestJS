import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../entities/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from '../dtos/createAuthor.dtos';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  async createAuthor(createAuthor: CreateAuthorDto): Promise<AuthorEntity> {
    const author = this.authorRepository.create(createAuthor);
    return await this.authorRepository.save(author);
  }
}
