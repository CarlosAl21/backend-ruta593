import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesController } from './buses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bus } from './entities/bus.entity';
import { BusesFoto } from 'src/buses-fotos/entities/buses-foto.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { Asiento } from 'src/asientos/entities/asiento.entity';
import { EstructuraBus } from 'src/estructura_buses/entidades/estructura_bus.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bus, BusesFoto, Asiento, EstructuraBus]),
    CloudinaryModule
  ],
  controllers: [BusesController],
  providers: [BusesService],
  exports: [BusesService]
})
export class BusesModule {}
