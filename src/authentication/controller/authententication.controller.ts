import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dtos/login.dto';

@ApiTags('Login')
@Controller('authententication')
export class AuthententicationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const userValidate =
      await this.authenticationService.validateUser(loginDto);

    if (!userValidate) {
      throw new UnauthorizedException('Not Valid Data');
    }

    const jwt = await this.authenticationService.generateJwt(userValidate);

    return jwt;
  }
}
