import { Module } from '@nestjs/common';
import { SalesController } from './controller/sales.controller';
import { SalesService } from './service/sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntity } from './entities/sales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesEntity])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
