import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { EventService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from '../entities/event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // Criar um novo evento
  @Post()
  async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  // Listar todos os eventos
  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  // Encontrar um evento por ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    const event = await this.eventService.findOne(+id);
    if (!event) {
      throw new NotFoundException(`Evento com ID ${id} não encontrado`);
    }
    return event;
  }

  // Atualizar um evento
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: CreateEventDto,
  ): Promise<Event> {
    return this.eventService.update(+id, updateEventDto);
  }

  // Deletar um evento
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.eventService.remove(+id);
  }
}
