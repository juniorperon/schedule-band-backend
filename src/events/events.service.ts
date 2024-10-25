import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.find({ relations: ['musicians'] });
  }

  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({
      where: { id },
      relations: ['musicians'],
    });
  }

  create(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  async update(id: number, event: Event): Promise<Event> {
    await this.eventRepository.update(id, event);
    return this.findOne(id);
  }

  delete(id: number): Promise<void> {
    return this.eventRepository.delete(id).then(() => {});
  }
}
