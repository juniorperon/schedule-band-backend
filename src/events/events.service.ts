// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { Musician } from '../entities/musician.entity';
import { Instrument } from '../entities/instrument.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Musician)
    private readonly musicianRepository: Repository<Musician>,
    @InjectRepository(Instrument)
    private readonly instrumentRepository: Repository<Instrument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const { musicianId, instrumentId, date } = createEventDto;

    // Verifique se o músico e o instrumento existem
    const musician = await this.musicianRepository.findOneBy({
      id: musicianId,
    });
    const instrument = await this.instrumentRepository.findOneBy({
      id: instrumentId,
    });

    if (!musician || !instrument) {
      throw new Error('Musician or Instrument not found');
    }

    // Crie o evento com os dados fornecidos
    const event = this.eventRepository.create({
      date,
      musician,
      instrument,
    });

    return this.eventRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find({ relations: ['musician', 'instrument'] });
  }

  async findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({
      where: { id },
      relations: ['musician', 'instrument'],
    });
  }

  async update(id: number, updateEventDto: CreateEventDto): Promise<Event> {
    await this.eventRepository.update(id, updateEventDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
