import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../entities/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from '../dtos/createAuthor.dto';
import { UpdateAuthorDto } from '../dtos/updateAuthor.dto';

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

  async findAllAuthors() {
    return await this.authorRepository.find();
  }

  async updateAuthor(
    idAuthor: number,
    updateAuthor: UpdateAuthorDto,
  ): Promise<any> {
    const user = await this.authorRepository.findOne({ where: { idAuthor } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.authorRepository.update(idAuthor, updateAuthor);

    const updateUserData = await this.authorRepository.findOne({
      where: { idAuthor },
    });

    return await updateUserData;
  }
}
