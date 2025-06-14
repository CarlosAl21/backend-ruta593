import { EstadoComprobante } from 'src/common/enums/comprobantes.enum';
import { User } from 'src/user/entities/user.entity';
import { Boleto } from 'src/boletos/entities/boleto.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('comprobante_pago')
export class ComprobantePago {
  @PrimaryGeneratedColumn('uuid')
  comprobante_id: string;

  @ManyToOne(() => Boleto, boleto => boleto.comprobantes)
  @JoinColumn({ name: 'boleto_uid' })
  boleto: Boleto;

  @Column()
  boleto_id: string;

  @ManyToOne(() => User, user => user.comprobantes)
  @JoinColumn({ name: 'usuario_uid' })
  usuario: User;

  @Column()
  usuario_id: string;

  @Column({nullable: true})
  url_comprobante: string;

  @Column({
    type: 'enum',
    enum: EstadoComprobante,
    default: EstadoComprobante.PENDIENTE
  })
  estado: EstadoComprobante;

  @Column({ nullable: true })
  comentarios: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_revision: Date;
}
