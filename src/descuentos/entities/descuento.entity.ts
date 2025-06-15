import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Descuento {
    @PrimaryGeneratedColumn('uuid')
    descuento_id: string;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    porcentaje: number;

    @Column({ type: 'date'})
    vida_util: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    link_descarga: string;

    @Column({ type: 'varchar', length: 255 })
    codigo_promocional: string;

    @Column({ type: 'varchar', length: 255})
    mensaje: string;

    @Column({ type: 'boolean', default: true })
    activo: boolean;
}
