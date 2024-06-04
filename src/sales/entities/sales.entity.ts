import { UsersEntity } from 'src/users/entities/users.entity';
import { BookEntity } from '../../books/entities/book.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
  Column,
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

  @ManyToOne(() => UsersEntity, (user) => user.sale)
  @JoinColumn({ name: 'idUser' })
  user: UsersEntity;

  @Column()
  idUser: number;

  @Column()
  nameUser: string;
}
