// src/instruments/instruments.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instrument } from './entities/instrument.entity';
import { CreateInstrumentDto } from './dto/create-instrument.dto';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectRepository(Instrument)
    private readonly instrumentRepository: Repository<Instrument>,
  ) {}

  async create(createInstrumentDto: CreateInstrumentDto): Promise<Instrument> {
    const instrument = this.instrumentRepository.create(createInstrumentDto);
    return this.instrumentRepository.save(instrument);
  }

  async findAll(): Promise<Instrument[]> {
    return this.instrumentRepository.find();
  }

  async findOne(id: number): Promise<Instrument> {
    return this.instrumentRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateInstrumentDto: CreateInstrumentDto,
  ): Promise<Instrument> {
    await this.instrumentRepository.update(id, updateInstrumentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.instrumentRepository.delete(id);
  }
}
