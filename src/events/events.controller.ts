import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EventService } from './events.service';
import { Event } from '../entities/event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Post()
  create(@Body() event: Event): Promise<Event> {
    return this.eventService.create(event);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() event: Event): Promise<Event> {
    return this.eventService.update(id, event);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.eventService.delete(id);
  }
}
