import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Ruta } from '../../rutas/entities/ruta.entity';

@Entity('paradas')
export class Parada {
  @PrimaryGeneratedColumn('uuid')
  parada_uid: string;

  @Column()
  ciudad: string;

  @OneToMany(() => Ruta, ruta => ruta.parada)
  rutas: Ruta[];

  @Column({default: true})
  activo: boolean;

  @CreateDateColumn()
  fecha_creacion: Date;
}
