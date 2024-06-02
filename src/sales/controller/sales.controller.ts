import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SalesService } from '../service/sales.service';
import { CreateSalesDto } from '../dtos/createSales.dto';
import { SalesEntity } from '../entities/sales.entity';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async createSale(
    @Body() createSaleDto: CreateSalesDto,
  ): Promise<SalesEntity> {
    return this.salesService.createSale(createSaleDto);
  }
}
