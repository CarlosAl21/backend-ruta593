import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Ciudad } from '../../ciudades/entidades/ciudad.entity';

@Entity('provincias')
export class Provincia {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Ciudad, ciudad => ciudad.provincia)
  ciudades: Ciudad[];
}
