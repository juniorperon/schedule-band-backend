import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Musician } from './entities/musician.entity';

@Injectable()
export class MusicianService {
  constructor(
    @InjectRepository(Musician)
    private readonly musicianRepository: Repository<Musician>,
  ) {}

  findAll(): Promise<Musician[]> {
    return this.musicianRepository.find();
  }

  findOne(id: number): Promise<Musician> {
    return this.musicianRepository.findOne({ where: { id } });
  }

  create(musician: Musician): Promise<Musician> {
    return this.musicianRepository.save(musician);
  }

  async update(id: number, musician: Musician): Promise<Musician> {
    await this.musicianRepository.update(id, musician);
    return this.findOne(id);
  }

  async findOneWithInstruments(id: number) {
    return this.musicianRepository.findOne({
      where: { id },
      relations: ['instruments'],
    });
  }

  delete(id: number): Promise<void> {
    return this.musicianRepository.delete(id).then(() => {});
  }
}
