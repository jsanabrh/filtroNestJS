import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

//Dto are created for the authentication module

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'User identification or password invalid' })
  readonly idUser: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'User identification or Password invalid' })
  readonly password: string;
}
