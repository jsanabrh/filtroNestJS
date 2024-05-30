import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class authorEntity {
  @PrimaryGeneratedColumn()
  idAuthor: string;

  @Column()
  nameAuthor: string;

  @Column()
  lastNameAuthor: string;
}
