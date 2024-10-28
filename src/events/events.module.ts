import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from '../entities/event.entity';
import { MusicianModule } from 'src/musicians/musicians.module';
import { Instrument } from 'src/entities/instrument.entity';
import { Musician } from 'src/entities/musician.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Musician, Instrument])],
  providers: [EventService],
  controllers: [EventsController],
})
export class EventsModule {}
