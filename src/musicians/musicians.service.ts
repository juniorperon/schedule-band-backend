import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Musician } from '../entities/musician.entity';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { Instrument } from 'src/entities/instrument.entity';

@Injectable()
export class MusicianService {
  constructor(
    @InjectRepository(Musician)
    private readonly musicianRepository: Repository<Musician>,
    @InjectRepository(Instrument)
    private readonly instrumentRepository: Repository<Instrument>,
  ) {}

  findAll(): Promise<Musician[]> {
    return this.musicianRepository.find({ relations: ['instruments'] });
  }

  findOne(id: number): Promise<Musician> {
    return this.musicianRepository.findOne({ where: { id } });
  }

  async create(musicianData: CreateMusicianDto): Promise<Musician> {
    const musician = new Musician();
    musician.fullName = musicianData.fullName;
    musician.email = musicianData.email;
    console.log(this.instrumentRepository);

    musician.instruments = await this.instrumentRepository.findByIds(
      musicianData.instruments,
    );

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
