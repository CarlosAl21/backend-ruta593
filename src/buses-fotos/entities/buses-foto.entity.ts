import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bus } from "src/buses/entities/bus.entity";

@Entity()
export class BusesFoto {
    @PrimaryGeneratedColumn('uuid')
    foto_id: string;

    @Column()
    url: string;

    @Column()
    public_id: string;

    @ManyToOne(() => Bus, bus => bus.fotos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'bus_uid' })
    bus: Bus;

    @Column()
    bus_uid: string;
}