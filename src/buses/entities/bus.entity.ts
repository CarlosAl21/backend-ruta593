import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusesFoto } from "src/buses-fotos/entities/buses-foto.entity";
import { Asiento } from "src/asientos/entities/asiento.entity";
import { Frecuencia } from '../../frecuencias/entities/frecuencia.entity';
import { EstructuraBus } from "src/estructura_buses/entidades/estructura_bus.entity";

@Entity()
export class Bus {
    @PrimaryGeneratedColumn('uuid')
    bus_id: string;

    @Column()
    numero_bus: number;

    @Column()
    placa: string;

    @Column()
    chasis: string;

    @Column()
    carroceria: string;

    @Column()
    total_asientos_normales: number;

    @Column()
    total_asientos_vip: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({default: true})
    activo: boolean;

    @OneToMany(() => BusesFoto, busFoto => busFoto.bus, { 
        eager: true,
        cascade: true 
    })
    fotos: BusesFoto[];

    @OneToMany(() => Asiento, asiento => asiento.bus)
    asientos: Asiento[];

    @OneToMany(() => Frecuencia, frecuencia => frecuencia.bus)
    frecuencias: Frecuencia[];

    @ManyToOne(() => EstructuraBus, estructuraBus => estructuraBus.buses, {
        eager: true,
        nullable: false
    })
    @JoinColumn({ name: 'id_estructura_bus' })
    id_estructura_bus: EstructuraBus;
}