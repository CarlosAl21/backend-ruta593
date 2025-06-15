import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Terminal } from '../../terminales/entidades/terminal.entity';
import { Cliente } from '../../clientes/entidades/cliente.entity';

@Entity('serial_estacion')
export class SerialEstacion {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_estacion: string;

  @Column('uuid')
  id_usuario: string;

  @Column()
  numero_serie: string;

  @Column()
  estado: string;

  @ManyToOne(() => Terminal)
  estacion: Terminal;

  @ManyToOne(() => Cliente)
  usuario: Cliente;
}
