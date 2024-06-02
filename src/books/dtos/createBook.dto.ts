import { IsNumber, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsNumber()
  idBook: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameBook: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoryBook: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descriptionBook: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  priceBook: string;
}
