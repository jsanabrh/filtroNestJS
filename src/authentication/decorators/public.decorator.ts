import { SetMetadata } from '@nestjs/common';
import { PUBLIC_KEY } from 'src/utils/keyDecorator';

export const PublicAccess = () => SetMetadata(PUBLIC_KEY, true);
