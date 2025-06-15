import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cooperativa } from '../../cooperativa/entities/cooperativa.entity';

@Entity('estructura_buses')
export class EstructuraBus {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nombre: string;

  @Column()
  distribucion: string;

  @Column()
  id_cooperativa: number;

  @ManyToOne(() => Cooperativa)
  cooperativa: Cooperativa;
}
