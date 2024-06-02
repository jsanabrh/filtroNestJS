import { BookEntity } from '../../books/entities/book.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class SalesEntity {
  @PrimaryGeneratedColumn()
  idSale: number;

  @CreateDateColumn()
  createdAt?: Date;

  @ManyToMany(() => BookEntity, (book) => book.sales)
  @JoinTable()
  books: BookEntity[];
}
