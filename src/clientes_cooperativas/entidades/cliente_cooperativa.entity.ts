import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cooperativa } from '../../cooperativa/entities/cooperativa.entity';
import { Cliente } from '../../clientes/entidades/cliente.entity';

@Entity('clientes_cooperativas')
export class ClienteCooperativa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cooperativa_id: string;

  @Column()
  dni_cliente: string;

  @Column({ type: 'timestamp', nullable: true })
  creadoEn: Date;

  @Column({ type: 'timestamp', nullable: true })
  actualizadoEn: Date;

  @ManyToOne(() => Cooperativa)
  cooperativa: Cooperativa;

  @ManyToOne(() => Cliente)
  cliente: Cliente;
}
