// src/events/events.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EventService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from '../entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventDto: CreateEventDto,
  ): Promise<Event> {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.eventService.remove(id);
  }
}
