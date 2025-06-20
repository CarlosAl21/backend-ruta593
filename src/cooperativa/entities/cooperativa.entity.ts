import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { ClienteCooperativa } from '../../clientes_cooperativas/entidades/cliente_cooperativa.entity';
import { Pago } from '../../pagos/entidades/pago.entity';

@Entity()
export class Cooperativa {
    @ApiProperty({
        description: 'ID único de la cooperativa',
        example: 'uuid-string'
    })
    @PrimaryGeneratedColumn('uuid')
    cooperativa_id: string;

    @ApiProperty({
        description: 'Nombre de la cooperativa de transporte',
        example: 'Cooperativa Trans Express'
    })
    @Column()
    nombre: string;

    @ApiProperty({
        description: 'Número de teléfono de la cooperativa',
        example: '0987654321'
    })
    @Column()
    telefono: string;

    @ApiProperty({
        description: 'Correo electrónico de contacto de la cooperativa',
        example: 'info@transexpress.com'
    })
    @Column()
    correo: string;

    @ApiProperty({
        description: 'URL del logo de la cooperativa',
        example: 'https://storage.googleapis.com/cooperativas/logo-transexpress.png'
    })
    @Column()
    logo: string;

    @ApiProperty({
        description: 'RUC (Registro Único de Contribuyentes) de la cooperativa',
        example: '1234567890001'
    })
    @Column()
    ruc: string;

    @ApiProperty({
        description: 'Dirección física de la cooperativa',
        example: 'Av. Principal 123 y Secundaria'
    })
    @Column()
    direccion: string;

    @OneToMany(() => ClienteCooperativa, cc => cc.cooperativa)
    clientes: ClienteCooperativa[];

    @OneToMany(() => Pago, pago => pago.cooperativa)
    pagos: Pago[];
}
