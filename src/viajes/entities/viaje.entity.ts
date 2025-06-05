import { Frecuencia } from "src/frecuencias/entities/frecuencia.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Viaje {
    @PrimaryGeneratedColumn('uuid')
    id_viaje: string;
    
    @Column({ type: 'date' })
    fecha_salida: Date;

    @Column({ type: 'number' })
    num_asientos_disponibles: number;

    @Column({ type: 'number' })
    num_asientos_ocupados: number;

    @ManyToOne(() => Frecuencia, frecuencia => frecuencia.viajes, { eager: true })
    @JoinColumn({ name: 'id_frecuencia' })
    id_frecuencia: Frecuencia;
    
}
