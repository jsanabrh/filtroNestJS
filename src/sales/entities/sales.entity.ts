import { BookEntity } from '../../books/entities/book.entity';
import { UsersEntity } from '../../users/entities/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class SalesEntity {
  @PrimaryGeneratedColumn()
  idSale: number;

  @CreateDateColumn()
  createdAt?: Date;

  @ManyToOne(() => UsersEntity, (users) => users.sales)
  users: UsersEntity;
}
