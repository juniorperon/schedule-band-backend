import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto, user:number): Promise<Event> {
    const { musicianId, date } = createEventDto;
    const existingEvent = await this.eventRepository.findOne({
      where: { musician: { id: musicianId }, date },
    });

    if (existingEvent) {
      throw new ConflictException('O musico ja esta nessa registrado nessa data.');
    }

    const event = new Event();
    event.title = createEventDto.title;
    event.local = createEventDto.local;
    event.date = createEventDto.date;
    event.musician = {id:createEventDto.musicianId} as any
    event.instrument = {id:createEventDto.instrumentId} as any
    event.user = {id:user} as any

    return this.eventRepository.save(event);
  }

  async findAll(userId: number): Promise<Event[]> {
    return this.eventRepository.find({
      where: { user: { id: userId } },relations:['musician','instrument'],
    });
  }

  async findOne(id: number, userId: number): Promise<Event> {
    const event = await this.eventRepository.findOne({
      where: { id, user: { id: userId } },
    });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  async update(id: number, updateEventDto: CreateEventDto, userId: number): Promise<Event> {
    const event = await this.findOne(id, userId);
    Object.assign(event, updateEventDto);
    return this.eventRepository.save(event);
  }

  async remove(id: number, userId: number): Promise<void> {
    const event = await this.findOne(id, userId);
    await this.eventRepository.remove(event);
  }
}
