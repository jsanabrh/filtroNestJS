import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';

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

  async findAllUsers() {
    return await this.userRepository.find();
  }

  async updateUser(idUser: number, updateUser: UpdateUserDto): Promise<any> {
    const user = await this.userRepository.findOne({ where: { idUser } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.update(idUser, updateUser);

    const updateUserData = await this.userRepository.findOne({
      where: { idUser },
    });

    return await updateUserData;
  }
}
