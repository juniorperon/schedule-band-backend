import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  createEvent(
    @Body('date') date: string,
    @Body('musicianIds') musicianIds: number[],
  ) {
    return this.eventsService.createEvent(date, musicianIds);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Put(':id')
  updateEvent(
    @Param('id') id: number,
    @Body('date') date: string,
    @Body('musicianIds') musicianIds: number[],
  ) {
    return this.eventsService.updateEvent(id, date, musicianIds);
  }

  @Delete(':id')
  removeEvent(@Param('id') id: number) {
    return this.eventsService.removeEvent(id);
  }
}
