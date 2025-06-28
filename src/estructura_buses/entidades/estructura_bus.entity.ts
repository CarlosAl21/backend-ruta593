import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cooperativa } from '../../cooperativa/entities/cooperativa.entity';
import { Bus } from 'src/buses/entities/bus.entity';

@Entity('estructura_buses')
export class EstructuraBus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  distribucion: string;

  @Column()
  id_cooperativa: number;

  @ManyToOne(() => Cooperativa)
  cooperativa: Cooperativa;

  @OneToMany(() => Bus, bus => bus.id_estructura_bus)
  buses: Bus[];
}
