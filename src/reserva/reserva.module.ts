import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { Reserva } from './entities/reserva.entity';
import { User } from '../user/entities/user.entity';
import { Frecuencia } from '../frecuencias/entities/frecuencia.entity';
import { Asiento } from '../asientos/entities/asiento.entity';
import { Ruta } from '../rutas/entities/ruta.entity';
import { Boleto } from '../boletos/entities/boleto.entity';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { MailModule } from '../mail/mail.module';
import { FacturaModule } from '../factura/factura.module';
import { Viaje } from 'src/viajes/entities/viaje.entity';
import { ViajesModule } from 'src/viajes/viajes.module';
import { DescuentosModule } from '../descuentos/descuentos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserva, User, Frecuencia, Asiento, Ruta, Boleto, Viaje]),
    CloudinaryModule,
    MailModule,
    FacturaModule,
    ViajesModule,
    DescuentosModule
  ],
  controllers: [ReservaController],
  providers: [ReservaService],
  exports: [ReservaService]
})
export class ReservaModule {}
