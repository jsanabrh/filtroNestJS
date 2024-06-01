import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<UsersEntity> {
    const user = this.userRepository.create(createUser);
    return await this.userRepository.save(user);
  }
}
