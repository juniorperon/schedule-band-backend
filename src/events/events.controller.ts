import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from '../entities/event.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('events')
@UseGuards(AuthGuard)
export class EventsController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto, @Req() req): Promise<Event> {
    const user = req.user.id; 
    
    return this.eventService.create(createEventDto, user);
  }

  @Get()
  async findAll(@Req() req): Promise<Event[]> {
    const userId = req.user.id; 
    return this.eventService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Req() req): Promise<Event> {
    const userId = req.user.id; 
    return this.eventService.findOne(id, userId);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventDto: CreateEventDto,
    @Req() req,
  ): Promise<Event> {
    const userId = req.user.id; 
    return this.eventService.update(id, updateEventDto, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Req() req): Promise<void> {
    const userId = req.user.id; 
    await this.eventService.remove(id, userId);
  }
}
