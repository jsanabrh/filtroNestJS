import { IsArray } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class CreateSalesDto {
  @ApiProperty()
  @IsNumber()
  idSale: number;
  createdAt: Date;

  @ApiProperty()
  @IsArray()
  @IsInt({ each: true })
  bookIds: number[];
}
