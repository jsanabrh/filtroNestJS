import { SalesEntity } from '../../sales/entities/sales.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryColumn()
  idUser: number;

  @Column()
  nameUser: string;

  @Column()
  lastNameUser: string;

  @OneToMany(() => SalesEntity, (sales) => sales.users)
  sales: SalesEntity[];
}
