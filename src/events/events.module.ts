import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './events.service';
import { EventController } from './events.controller';
import { Event } from '../entities/event.entity';
import { MusicianModule } from 'src/musicians/musicians.module';
import { InstrumentsModule } from 'src/instrument/instrument.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    MusicianModule,
    InstrumentsModule,
  ],
  providers: [EventService],
  controllers: [EventController],
  exports: [TypeOrmModule],
})
export class EventsModule {}
