import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Administrador } from '../../administradores/entidades/administrador.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Administrador, admin => admin.rol)
  administradores: Administrador[];
}
