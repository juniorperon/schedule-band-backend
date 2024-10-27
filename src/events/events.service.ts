import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = this.eventRepository.create(createEventDto);
    return this.eventRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    return this.eventRepository.findOneBy({ id });
  }

  async update(id: number, updateEventDto: CreateEventDto): Promise<Event> {
    await this.eventRepository.update(id, updateEventDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
