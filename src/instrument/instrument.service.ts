// src/instruments/instruments.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instrument } from '../entities/instrument.entity';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectRepository(Instrument)
    private readonly instrumentRepository: Repository<Instrument>,
  ) {}

  async create(createInstrumentDto: CreateInstrumentDto, user: CreateUserDto): Promise<Instrument> {
    const instrument = this.instrumentRepository.create({...createInstrumentDto, user});
    return this.instrumentRepository.save(instrument);
  }

  async findAll(user:CreateUserDto): Promise<Instrument[]> {
    const userId = user.id;
    return this.instrumentRepository.find({where: {
      user:{id:userId}
    }
    });
  }

  async findOne(id: number, user: CreateUserDto): Promise<Instrument> {
    const userId = user.id;
    return this.instrumentRepository.findOneBy({ id, user:{id:userId} });
  }

  async update(
    id: number,
    updateInstrumentDto: CreateInstrumentDto,
    user:CreateUserDto
  ): Promise<Instrument> {
    await this.instrumentRepository.update(id, updateInstrumentDto);
    return this.findOne(id,user);
  }

  async remove(id: number, user:CreateUserDto): Promise<void> {
    await this.instrumentRepository.delete({id,user});
  }
}
