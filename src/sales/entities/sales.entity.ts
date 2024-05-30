import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class salesEntity {
  @PrimaryGeneratedColumn()
  idSale: string;

  @Column()
  priceSale: number;
}
