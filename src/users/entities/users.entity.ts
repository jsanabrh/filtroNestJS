import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  idUser: string;

  @Column()
  nameUser: string;

  @Column()
  lastNameUser: string;
}
