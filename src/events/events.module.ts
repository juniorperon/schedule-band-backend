import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './events.service';
import { EventController } from './events.controller';
import { Event } from '../entities/event.entity';
import { MusicianModule } from '../musicians/musicians.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), MusicianModule],
  providers: [EventService],
  controllers: [EventController],
})
export class EventsModule {}
