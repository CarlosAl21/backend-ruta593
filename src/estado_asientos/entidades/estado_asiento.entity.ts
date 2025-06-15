import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../clientes/entidades/cliente.entity';
import { Frecuencia } from '../../frecuencias/entities/frecuencia.entity';

@Entity('estado_asientos')
export class EstadoAsiento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_asiento: number;

  @Column()
  id_frecuencia: number;

  @Column()
  estado: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_reserva: Date;

  @Column({ nullable: true })
  dni_cliente: string;

  @ManyToOne(() => Cliente)
  cliente: Cliente;

  @ManyToOne(() => Frecuencia)
  frecuencia: Frecuencia;
}
