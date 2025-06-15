import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cooperativa } from '../../cooperativa/entities/cooperativa.entity';

@Entity('tipos_asientos')
export class TipoAsiento {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  cooperativa_id: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  caracter_especial: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', nullable: true })
  costo_adicional: number;

  @ManyToOne(() => Cooperativa)
  cooperativa: Cooperativa;
}
