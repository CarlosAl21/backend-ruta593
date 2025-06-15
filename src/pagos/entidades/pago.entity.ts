import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Boleto } from '../../boletos/entities/boleto.entity';
import { MetodoPago } from '../../metodos_pago/entidades/metodo_pago.entity';
import { Cooperativa } from '../../cooperativa/entities/cooperativa.entity';

@Entity('pagos')
export class Pago {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_boleto: string;

  @Column('uuid')
  id_metodo_pago: string;

  @Column({ type: 'timestamp' })
  fecha_pago: Date;

  @Column({ nullable: true })
  comprobante: string;

  @Column()
  estado: string;

  @Column('uuid')
  id_cooperativa: string;

  @ManyToOne(() => Boleto)
  boleto: Boleto;

  @ManyToOne(() => MetodoPago)
  metodo_pago: MetodoPago;

  @ManyToOne(() => Cooperativa)
  cooperativa: Cooperativa;
}
