import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParadasIntermediasService } from './paradas_intermedias.service';
import { ParadasIntermediasController } from './paradas_intermedias.controller';
import { ParadaIntermedia } from './entidades/parada_intermedia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParadaIntermedia])],
  controllers: [ParadasIntermediasController],
  providers: [ParadasIntermediasService],
  exports: [ParadasIntermediasService],
})
export class ParadasIntermediasModule {}
