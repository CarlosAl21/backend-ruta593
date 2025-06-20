import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Frecuencia } from '../../frecuencias/entities/frecuencia.entity';
import { Parada } from '../../paradas/entities/parada.entity';

@Entity('rutas')
export class Ruta {
  //TODO: agregar la relacion con la parada y la frecuencia
  @PrimaryGeneratedColumn('uuid')
  rutas_id: string;

  @Column()
  frecuencia_id: string; // No modificar porque es de frecuencias

  @ManyToOne(() => Frecuencia, frecuencia => frecuencia.rutas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'frecuencia_id' })
  frecuencia: Frecuencia;

  @Column()
  parada_id: string;

  @ManyToOne(() => Parada, parada => parada.rutas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parada_uid' })
  parada: Parada;

  @Column()
  orden: number;

  @Column('float')
  distancia_parada: number;

  @Column('float')
  precio_parada: number;

  @Column('time')
  tiempo_parada: string;

  @Column({default: true})
  activo: boolean;
}
