import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryColumn()
  idUser: number;

  @Column()
  nameUser: string;

  @Column()
  lastNameUser: string;
}
