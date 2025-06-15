import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstructuraBusesService } from './estructura_buses.service';
import { EstructuraBusesController } from './estructura_buses.controller';
import { EstructuraBus } from './entidades/estructura_bus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstructuraBus])],
  controllers: [EstructuraBusesController],
  providers: [EstructuraBusesService],
  exports: [EstructuraBusesService],
})
export class EstructuraBusesModule {}
