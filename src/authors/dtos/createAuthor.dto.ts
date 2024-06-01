import { IsNumber, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsNumber()
  idAuthor: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameAuthor: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastNameAuthor: string;
}
