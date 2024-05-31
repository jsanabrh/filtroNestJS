import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SalesEntity {
  @PrimaryGeneratedColumn()
  idSale: string;

  @Column()
  priceSale: number;
}
