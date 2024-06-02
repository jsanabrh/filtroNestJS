import { AuthorEntity } from '../../authors/entities/author.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  idBook: number;

  @Column()
  nameBook: string;

  @Column()
  categoryBook: string;

  @Column()
  descriptionBook: string;

  @Column()
  priceBook: string;

  @Column()
  idAuthor: number;

  @Column({ nullable: true })
  nameAuthor: string;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  @JoinColumn({ name: 'idAuthor' })
  author: AuthorEntity;
}
