import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity('administradores')
export class Administrador {
  @PrimaryColumn('uuid')
  dni: string;

  @Column()
  usuario: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column()
  id_rol: number;

  @Column({ type: 'timestamp', nullable: true })
  creadoEn: Date;

  @Column({ type: 'timestamp', nullable: true })
  actualizadoEn: Date;

  @ManyToOne(() => Role, rol => rol.administradores)
  rol: Role;
}
