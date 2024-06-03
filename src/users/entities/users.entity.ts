import { SalesEntity } from 'src/sales/entities/sales.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  nameUser: string;

  @Column()
  lastNameUser: string;

  @OneToMany(() => SalesEntity, (sale) => sale.user)
  sale: SalesEntity[];
}
