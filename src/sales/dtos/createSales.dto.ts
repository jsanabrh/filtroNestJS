import { IsArray } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class CreateSalesDto {
  @ApiProperty()
  @IsNumber()
  idSale: number;
  createdAt: Date;

  @ApiProperty()
  @IsInt()
  idUser: number;

  @ApiProperty({ type: [Number] })
  @IsArray()
  @IsInt({ each: true })
  bookIds: number[];
}
