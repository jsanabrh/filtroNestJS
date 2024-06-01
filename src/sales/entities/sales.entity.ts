import { BookEntity } from '../../books/entities/book.entity';
import { UsersEntity } from '../../users/entities/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class SalesEntity {
  @PrimaryGeneratedColumn()
  idSale: string;

  @Column()
  priceSale: number;

  @OneToMany(() => BookEntity, (book) => book.sales)
  books: BookEntity[];

  @ManyToOne(() => UsersEntity, (users) => users.sales)
  users: UsersEntity;
}
