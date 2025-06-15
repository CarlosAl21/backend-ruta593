import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Ciudad } from '../../ciudades/entidades/ciudad.entity';

@Entity('terminales')
export class Terminal {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_ciudad: string;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  hora_apertura: string;

  @Column()
  hora_cierre: string;

  @ManyToOne(() => Ciudad)
  ciudad: Ciudad;
}
