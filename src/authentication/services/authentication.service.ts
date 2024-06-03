import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/service/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UsersEntity } from 'src/users/entities/users.entity';
import { PayloadToken } from 'src/interfaces/auth.interface';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UsersService) {}
  public async validateUser(loginDto: LoginDto) {
    const idUserAuth = await this.userService.findBy({
      key: 'idUser',
      value: loginDto.idUser,
    });

    if (idUserAuth) {
      const match = await bcrypt.compare(
        loginDto.password,
        idUserAuth.password,
      );
      if (match) {
        return idUserAuth;
      }
    }
  }

  public loginJwt({
    payload,
    secret,
    expires,
  }: {
    payload: jwt.JwtPayload;
    secret: string;
    expires: number | string;
  }) {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

  public async generateJwt(user: UsersEntity): Promise<any> {
    const getUser = await this.userService.findById(user.idUser);

    const payload: PayloadToken = {
      role: getUser.role,
      sub: getUser.nameUser,
    };

    return {
      accessToken: this.loginJwt({
        payload,
        secret: process.env.JWT_SECRET,
        expires: '1h',
      }),
    };
  }
}
