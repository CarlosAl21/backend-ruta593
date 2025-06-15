import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciasService } from './provincias.service';
import { ProvinciasController } from './provincias.controller';
import { Provincia } from './entidades/provincia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provincia])],
  controllers: [ProvinciasController],
  providers: [ProvinciasService],
  exports: [ProvinciasService],
})
export class ProvinciasModule {}
