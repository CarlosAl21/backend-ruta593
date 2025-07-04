import { EstadoBoleto } from "src/common/enums/boletos.enum";
import { ComprobantePago } from "src/comprobantes_pagos/entities/comprobantes_pago.entity";
import { Factura } from "src/factura/entities/factura.entity";
import { Reserva } from "src/reserva/entities/reserva.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pago } from '../../pagos/entidades/pago.entity';

@Entity("boletos")
export class Boleto {
    @PrimaryGeneratedColumn('uuid')
    boleto_id: string

    @Column("float")
    total: number

    @Column()
    cantidad_asientos: number

    @Column(
        {
            type: 'enum',
            enum: EstadoBoleto,
            default: EstadoBoleto.PAGADO
        }
    )
    estado: EstadoBoleto

    @OneToMany(() => Reserva, reserva => reserva.boleto)
    reservas: Reserva[]

    @OneToMany(() => Factura, factura => factura.boleto)
    facturas: Factura[]

    @Column()
    url_imagen_qr: string

    @Column()
    asientos: string

    @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    fecha_emision: Date

    @OneToMany(() => ComprobantePago, comprobante => comprobante.boleto)
    comprobantes: ComprobantePago[]

    @OneToMany(() => Pago, pago => pago.boleto)
    pagos: Pago[];
}
