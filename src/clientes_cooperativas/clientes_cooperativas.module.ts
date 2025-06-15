import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesCooperativasService } from './clientes_cooperativas.service';
import { ClientesCooperativasController } from './clientes_cooperativas.controller';
import { ClienteCooperativa } from './entidades/cliente_cooperativa.entity';
import { Cliente } from '../clientes/entidades/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteCooperativa, Cliente])],
  controllers: [ClientesCooperativasController],
  providers: [ClientesCooperativasService],
  exports: [ClientesCooperativasService],
})
export class ClientesCooperativasModule {}
