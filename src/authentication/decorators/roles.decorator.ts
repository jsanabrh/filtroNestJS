import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/models/roles.model';
import { ROLES_KEY } from 'src/utils/keyDecorator';

export const Roles = (...roles: Array<keyof typeof Role>) =>
  SetMetadata(ROLES_KEY, roles);
