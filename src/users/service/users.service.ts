import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { HashingService } from '../../hashing/hashing.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    private readonly hashingService: HashingService,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<UsersEntity> {
    createUser.password = await this.hashingService.hash(
      createUser.password.trim(),
    );
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

  public async findBy({
    key,
    value,
  }: {
    key: keyof CreateUserDto;
    value: any;
  }) {
    const user: UsersEntity = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where({ [key]: value })
      .getOne();

    return user;
  }

  async findById(idUser: number): Promise<UsersEntity> {
    const user = await this.userRepository.findOne({ where: { idUser } });
    return user;
  }
}
