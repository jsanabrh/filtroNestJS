import { SalesEntity } from '../../sales/entities/sales.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  idUser: string;

  @Column()
  nameUser: string;

  @Column()
  lastNameUser: string;

  @OneToMany(() => SalesEntity, (sales) => sales.users)
  sales: SalesEntity[];
}
