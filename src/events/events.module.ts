import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './events.service';
import { EventController } from './events.controller';
import { Event } from './entities/event.entity'; // Importe a entidade Event

@Module({
  imports: [TypeOrmModule.forFeature([Event])], // Registra o repositório Event
  controllers: [EventController],
  providers: [EventService],
})
export class EventsModule {}
