// src/instruments/instruments.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentsController } from './instrument.controller';
import { InstrumentsService } from './instrument.service';
import { Instrument } from '../entities/instrument.entity';
import { MusicianModule } from 'src/musicians/musicians.module';

@Module({
  imports: [TypeOrmModule.forFeature([Instrument]), MusicianModule],
  controllers: [InstrumentsController],
  providers: [InstrumentsService],
  exports: [TypeOrmModule],
})
export class InstrumentsModule {}
