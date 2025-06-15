import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ClienteCooperativa } from '../../clientes_cooperativas/entidades/cliente_cooperativa.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryColumn('uuid')
  dni: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @OneToMany(() => ClienteCooperativa, cc => cc.cliente)
  cooperativas: ClienteCooperativa[];
}
