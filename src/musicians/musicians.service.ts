import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Musician } from './entities/musician.entity';

@Injectable()
export class MusiciansService {
  constructor(
    @InjectRepository(Musician)
    private musiciansRepository: Repository<Musician>,
  ) {}

  async createMusician(
    fullName: string,
    email: string,
    instruments: string[],
  ): Promise<Musician> {
    const musician = this.musiciansRepository.create({
      fullName,
      email,
      instruments,
    });
    return this.musiciansRepository.save(musician);
  }

  findAll(): Promise<Musician[]> {
    return this.musiciansRepository.find();
  }

  async updateMusician(
    id: number,
    fullName: string,
    email: string,
    instruments: string[],
  ): Promise<Musician> {
    const musician = await this.musiciansRepository.findOneBy({ id });
    if (!musician) {
      throw new NotFoundException('Musician not found');
    }

    musician.fullName = fullName;
    musician.email = email;
    musician.instruments = instruments;
    return this.musiciansRepository.save(musician);
  }

  async removeMusician(id: number): Promise<void> {
    await this.musiciansRepository.delete(id);
  }
}
