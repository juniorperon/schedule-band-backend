import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Musician } from '../entities/musician.entity';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { Instrument } from 'src/entities/instrument.entity';
import { UpdateMusicianDto } from './dto/update-musician.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class MusicianService {
  constructor(
    @InjectRepository(Musician)
    private readonly musicianRepository: Repository<Musician>,
    @InjectRepository(Instrument)
    private readonly instrumentRepository: Repository<Instrument>,
  ) {}

  async create(musicianData: CreateMusicianDto, userId:number): Promise<Musician> {
    const musician = new Musician();
    musician.fullName = musicianData.fullName;
    musician.email = musicianData.email;
    musician.user = {id:userId} as any;

    musician.instruments = await this.instrumentRepository.find({where: {
      id: In(musicianData.instruments)
    }}
    );

    return this.musicianRepository.save(musician);
  }

  findAll(user:CreateUserDto): Promise<Musician[]> {
    const userId = user.id;
    return this.musicianRepository.find({where: {
      user:{id:userId}
    }, relations: ['instruments'] });
  }

  findOne(id: number): Promise<Musician> {
    return this.musicianRepository.findOne({ where: { id } });
  }

  

  async update(id: number, musicianData: UpdateMusicianDto): Promise<Musician> {
    const musician = await this.musicianRepository.findOne({ where: { id } });

    if (!musician) {
      throw new NotFoundException(`Músico com ID ${id} não encontrado`);
    }

    musician.fullName = musicianData.fullName;
    musician.email = musicianData.email;

    if (musicianData.instruments && musicianData.instruments.length > 0) {
      musician.instruments = await this.instrumentRepository.find({where: {
        id: In(musicianData.instruments)
      }});
    } else {
      musician.instruments = [];
    }

    return this.musicianRepository.save(musician);
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
