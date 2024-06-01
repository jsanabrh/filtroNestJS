import { IsNumber, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNumber()
  idUser: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameUser: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastNameUser: string;
}
