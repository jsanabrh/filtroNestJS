import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  idAuthor: string;

  @Column()
  nameAuthor: string;

  @Column()
  lastNameAuthor: string;
}
