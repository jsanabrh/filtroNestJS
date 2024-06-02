import { BookEntity } from '../../books/entities/book.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  idAuthor: number;

  @Column()
  nameAuthor: string;

  @Column()
  lastNameAuthor: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
