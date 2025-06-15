import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Ruta } from '../../rutas/entities/ruta.entity';
import { Terminal } from '../../terminales/entidades/terminal.entity';

@Entity('paradas_intermedias')
export class ParadaIntermedia {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_ruta: string;

  @Column('uuid')
  id_estacion: string;

  @Column()
  orden: number;

  @ManyToOne(() => Ruta)
  ruta: Ruta;

  @ManyToOne(() => Terminal)
  estacion: Terminal;
}
