import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Pago } from '../../pagos/entidades/pago.entity';

@Entity('metodos_pago')
export class MetodoPago {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Pago, pago => pago.metodo_pago)
  pagos: Pago[];
}
