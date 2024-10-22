import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { Musician } from '../musicians/entities/musician.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  // Criar evento
  async createEvent(date: string, musicianIds: number[]): Promise<Event> {
    const event = this.eventsRepository.create({ date });
    event.musicians = musicianIds.map((id) => ({ id }) as Musician);
    return this.eventsRepository.save(event);
  }

  // Listar eventos
  findAll(): Promise<Event[]> {
    return this.eventsRepository.find({ relations: ['musicians'] });
  }

  // Editar evento
  async updateEvent(
    id: number,
    date: string,
    musicianIds: number[],
  ): Promise<Event> {
    const event = await this.eventsRepository.findOne({
      where: { id },
      relations: ['musicians'],
    });
    if (!event) throw new NotFoundException('Event not found');

    event.date = date;
    event.musicians = musicianIds.map((id) => ({ id }) as Musician);
    return this.eventsRepository.save(event);
  }

  // Deletar evento
  async removeEvent(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }
}
