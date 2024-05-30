import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class bookEntity {
  @PrimaryGeneratedColumn()
  idAuthor: string;

  @Column()
  nameAuthor: string;

  @Column()
  lastNameAuthor: string;
}
