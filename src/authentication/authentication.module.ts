import { Global, Module } from '@nestjs/common';
import { AuthententicationController } from './controller/authententication.controller';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from 'src/users/service/users.service';
import { UsersModule } from 'src/users/users.module';

@Global()
@Module({
  imports: [UsersModule],
  controllers: [AuthententicationController],
  providers: [AuthenticationService, UsersService],
})
export class AuthenticationModule {}
