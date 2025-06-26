import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BusesModule } from './buses/buses.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { BusesFotosModule } from './buses-fotos/buses-fotos.module';
import { AsientosModule } from './asientos/asientos.module';
import { FrecuenciasModule } from './frecuencias/frecuencias.module';
import { ParadasModule } from './paradas/paradas.module';
import { RutasModule } from './rutas/rutas.module';
import { ComprobantesPagosModule } from './comprobantes_pagos/comprobantes_pagos.module';
import { BoletosModule } from './boletos/boletos.module';
import { ReservaModule } from './reserva/reserva.module';
import { MailModule } from './mail/mail.module';
import { CooperativaModule } from './cooperativa/cooperativa.module';
import { FacturaModule } from './factura/factura.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViajesModule } from './viajes/viajes.module';
import { DescuentosModule } from './descuentos/descuentos.module';
import { ClientesCooperativasModule } from './clientes_cooperativas/clientes_cooperativas.module';
import { MetodoPago } from './metodos_pago/entidades/metodo_pago.entity';
import { Pago } from './pagos/entidades/pago.entity';
// Importa todas las entidades necesarias
import { User } from './user/entities/user.entity';
import { Bus } from './buses/entities/bus.entity';
import { Asiento } from './asientos/entities/asiento.entity';
import { Frecuencia } from './frecuencias/entities/frecuencia.entity';
import { Parada } from './paradas/entities/parada.entity';
import { Ruta } from './rutas/entities/ruta.entity';
import { Boleto } from './boletos/entities/boleto.entity';
import { Reserva } from './reserva/entities/reserva.entity';
import { Cooperativa } from './cooperativa/entities/cooperativa.entity';
import { Factura } from './factura/entities/factura.entity';
import { Viaje } from './viajes/entities/viaje.entity';
import { Descuento } from './descuentos/entities/descuento.entity';
import { Role } from './roles/entities/role.entity';
import { BusesFoto } from './buses-fotos/entities/buses-foto.entity';
import { ComprobantePago } from './comprobantes_pagos/entities/comprobantes_pago.entity';
import { Administrador } from './administradores/entidades/administrador.entity';
import { Cliente } from './clientes/entidades/cliente.entity';
import { Terminal } from './terminales/entidades/terminal.entity';
import { Provincia } from './provincias/entidades/provincia.entity';
import { Ciudad } from './ciudades/entidades/ciudad.entity';
import { ParadaIntermedia } from './paradas_intermedias/entidades/parada_intermedia.entity';
import { SerialEstacion } from './serial_estacion/entidades/serial_estacion.entity';
import { EstadoAsiento } from './estado_asientos/entidades/estado_asiento.entity';
import { TipoAsiento } from './tipos_asientos/entidades/tipo_asiento.entity';
import { EstructuraBus } from './estructura_buses/entidades/estructura_bus.entity';
import { EstacionCooperativa } from './estacion_cooperativa/entidades/estacion_cooperativa.entity';
import { ClienteCooperativa } from './clientes_cooperativas/entidades/cliente_cooperativa.entity';
import { EstructuraBusesModule } from './estructura_buses/estructura_buses.module';
import { TerminalesModule } from './terminales/terminales.module';
import { ParadasIntermediasModule } from './paradas_intermedias/paradas_intermedias.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { CiudadesModule } from './ciudades/ciudades.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA,
      autoLoadEntities: true,
      entities: [
        MetodoPago,
        Pago,
        User,
        Bus,
        BusesFoto,
        Asiento,
        Frecuencia,
        Parada,
        Ruta,
        ComprobantePago,
        Boleto,
        Reserva,
        Cooperativa,
        Factura,
        Viaje,
        Descuento,
        ClienteCooperativa,
        Administrador,
        Cliente,
        Terminal,
        Provincia,
        Ciudad,
        ParadaIntermedia,
        SerialEstacion,
        EstadoAsiento,
        TipoAsiento,
        EstructuraBus,
        EstacionCooperativa,
        Role,
        // ...agrega aquí cualquier otra entidad que tengas...
      ],
      // ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
      synchronize: true,
      extra: {
        options: `-c search_path=${process.env.DB_SCHEMA},public`,
      },
    }),
    UserModule,
    AuthModule,
    BusesModule,
    CloudinaryModule,
    BusesFotosModule,
    AsientosModule,
    FrecuenciasModule,
    ParadasModule,
    RutasModule,
    ComprobantesPagosModule,
    BoletosModule,
    ReservaModule,
    MailModule,
    CooperativaModule,
    FacturaModule,
    ViajesModule,
    DescuentosModule,
    ClientesCooperativasModule,
    EstructuraBusesModule,
    TerminalesModule,
    ParadasIntermediasModule,
    ProvinciasModule,
    CiudadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
