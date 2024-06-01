import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UsersEntity } from '../entities/users.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('createUser')
  async createUser(@Body() createUser: CreateUserDto): Promise<UsersEntity> {
    return this.userService.createUser(createUser);
  }

  @Get('/findAllUsers')
  async findAllUser() {
    return this.userService.findAllUsers();
  }

  @Patch('/updateUser/:userId')
  async updateUser(
    @Param('userId') userId: number,
    @Body() updateUser: CreateUserDto,
  ) {
    return this.userService.updateUser(userId, updateUser);
  }
}
