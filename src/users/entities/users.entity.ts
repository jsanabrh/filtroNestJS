import { Exclude } from 'class-transformer';
import { Role } from 'src/models/roles.model';
import { SalesEntity } from 'src/sales/entities/sales.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryColumn()
  idUser: number;

  @Column()
  nameUser: string;

  @Column()
  lastNameUser: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role })
  role: Role;

  @OneToMany(() => SalesEntity, (sale) => sale.user)
  sale: SalesEntity[];
}
