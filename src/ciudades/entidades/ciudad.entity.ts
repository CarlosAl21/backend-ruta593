import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Provincia } from '../../provincias/entidades/provincia.entity';

@Entity('ciudades')
export class Ciudad {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  id_provincia: string;

  @Column()
  nombre: string;

  @ManyToOne(() => Provincia, provincia => provincia.ciudades)
  provincia: Provincia;
}
