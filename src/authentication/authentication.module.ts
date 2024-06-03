import { Module } from '@nestjs/common';
import { AuthententicationController } from './controller/authententication.controller';
import { AuthenticationService } from './services/authentication.service';

@Module({
  controllers: [AuthententicationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
