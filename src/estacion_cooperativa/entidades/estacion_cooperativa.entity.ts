import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Cooperativa } from '../../cooperativa/entities/cooperativa.entity';
import { Terminal } from '../../terminales/entidades/terminal.entity';

@Entity('estacion_cooperativa')
export class EstacionCooperativa {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_estacion: string;

  @Column('uuid')
  id_cooperativa: string;

  @ManyToOne(() => Cooperativa)
  cooperativa: Cooperativa;

  @ManyToOne(() => Terminal)
  estacion: Terminal;
}
