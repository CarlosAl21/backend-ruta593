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
      extra: {
        options: `-c search_path=${process.env.DB_SCHEMA}`,
      },
      // ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
      synchronize: true,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
