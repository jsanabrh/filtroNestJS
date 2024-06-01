import { AuthorEntity } from '../../authors/entities/author.entity';
import { SalesEntity } from '../../sales/entities/sales.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  idBook: string;

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

  @ManyToOne(() => AuthorEntity, (Author) => Author.books)
  authors: AuthorEntity;

  @ManyToOne(() => SalesEntity, (Sales) => Sales.books)
  sales: SalesEntity;
}
