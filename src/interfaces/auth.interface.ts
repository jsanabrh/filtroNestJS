import { Role } from 'src/models/roles.model';

export interface PayloadToken {
  sub: string;
  role: Role;
}
