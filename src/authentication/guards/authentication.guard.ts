import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { request } from 'express';
import { AuthTokenExpire } from 'src/interfaces/auth.interface';
import { UsersService } from 'src/users/service/users.service';
import { PUBLIC_KEY } from 'src/utils/keyDecorator';
import { useToken } from 'src/utils/use.token';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly userService: UsersService,
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest<Request>();
    const token = req.headers['token'];

    if (!token || Array.isArray(token)) {
      throw new UnauthorizedException('Invalid Token');
    }

    const manageToken: AuthTokenExpire | string = useToken(token);

    if (typeof manageToken === 'string') {
      throw new UnauthorizedException(manageToken);
    }

    if (manageToken.isExpired) {
      throw new UnauthorizedException('Token is expired');
    }

    const { userId } = manageToken;

    const user = await this.userService.findById(userId);

    if (!user) {
      throw new UnauthorizedException('User not valid');
    }

    request.userId = user.idUser;
    request.roleUser = user.role;
    request.sub = user.nameUser;

    return true;
  }
}
