import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UsersEntity } from '../entities/users.entity';

@ApiTags('Create User')
@Controller('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UsersEntity> {
    return this.userService.createUser(createUser);
  }
}
