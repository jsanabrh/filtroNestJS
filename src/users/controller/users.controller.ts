import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UsersEntity } from '../entities/users.entity';
import { PublicAccess } from 'src/authentication/decorators/public.decorator';
import { AuthenticationGuard } from 'src/authentication/guards/authentication.guard';
import { RolesGuard } from 'src/authentication/guards/roles.guard';
import { Roles } from 'src/authentication/decorators/roles.decorator';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthenticationGuard, RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Roles('ADMIN')
  @Get('/findAllUsers')
  async findAllUser() {
    return this.userService.findAllUsers();
  }

  @PublicAccess()
  @Post('createUser')
  async createUser(@Body() createUser: CreateUserDto): Promise<UsersEntity> {
    return this.userService.createUser(createUser);
  }

  @Patch('/updateUser/:userId')
  async updateUser(
    @Param('userId') userId: number,
    @Body() updateUser: CreateUserDto,
  ) {
    return this.userService.updateUser(userId, updateUser);
  }
}
