import { EstadoReserva, MetodoPago } from "src/common/enums/reserva.enum";
import { User } from '../../user/entities/user.entity';
import { Asiento } from '../../asientos/entities/asiento.entity';
import { Frecuencia } from '../../frecuencias/entities/frecuencia.entity';
import { Boleto } from '../../boletos/entities/boleto.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity("reservas")
export class Reserva {
    @PrimaryGeneratedColumn('uuid')
    reserva_id: string

    @ManyToOne(() => User, user => user.reservas)
    @JoinColumn({ name: 'usuario_uid' })
    usuario: User;

    @Column()
    usuario_id: string;
    
    @ManyToOne(() => Asiento, asiento => asiento.reservas)
    @JoinColumn({ name: 'asiento_uid' })
    asiento: Asiento;

    @Column()
    asiento_id: string

    @ManyToOne(() => Frecuencia, frecuencia => frecuencia.reservas)
    @JoinColumn({ name: 'frecuencia_id' })
    frecuencia: Frecuencia;

    @Column()
    frecuencia_id: string

    @ManyToOne(() => Boleto, boleto => boleto.reservas)
    @JoinColumn({ name: 'boleto_uid' })
    boleto: Boleto;

    @Column({ nullable: true })
    boleto_id: string

    @Column(
        {
            type: 'enum',
            enum: MetodoPago,
            default: MetodoPago.PRESENCIAL
        }
    )
    metodo_pago: MetodoPago

    @Column()
    nombre_pasajero: string 

    @Column()
    identificacion_pasajero: string

    @Column(
        {
            type: 'enum',
            enum: EstadoReserva,
            default: EstadoReserva.PENDIENTE
        }
    )
    estado: EstadoReserva

    @CreateDateColumn()
    fecha_creacion: Date

    @Column()
    fecha_viaje: Date

    @Column("time")
    hora_viaje: string

    @Column("float")
    precio: number

    @Column({ nullable: true })
    observacion: string

    @Column()
    destino_reserva: string
}
