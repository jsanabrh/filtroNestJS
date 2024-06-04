import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { HashingService } from 'src/hashing/hashing.service';
import { bcryptService } from 'src/hashing/bcrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [
    { provide: HashingService, useClass: bcryptService },
    UsersService,
  ],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule, HashingService],
})
export class UsersModule {}
