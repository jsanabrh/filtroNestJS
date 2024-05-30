import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class bookEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nameBook: string;

  @Column()
  categoryBook: string;

  @Column()
  descriptionBook: string;

  @Column()
  priceBook: string;

  @Column()
  stockBook: number;
}
