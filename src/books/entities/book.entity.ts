import { AuthorEntity } from '../../authors/entities/author.entity';
import { SalesEntity } from '../../sales/entities/sales.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => AuthorEntity, (Author) => Author.books)
  authors: AuthorEntity;

  @ManyToOne(() => SalesEntity, (Sales) => Sales.books)
  sales: SalesEntity;
}
