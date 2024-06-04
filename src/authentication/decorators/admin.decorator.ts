import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/models/roles.model';
import { ADMIN_KEY } from 'src/utils/keyDecorator';

export const AdminAccess = () => SetMetadata(ADMIN_KEY, Role.ADMIN);
