import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminalesService } from './terminales.service';
import { TerminalesController } from './terminales.controller';
import { Terminal } from './entidades/terminal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Terminal])],
  controllers: [TerminalesController],
  providers: [TerminalesService],
  exports: [TerminalesService],
})
export class TerminalesModule {}
