// src/instruments/instruments.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { InstrumentsService } from './instrument.service';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { Instrument } from '../entities/instrument.entity';

@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Post()
  create(
    @Body() createInstrumentDto: CreateInstrumentDto,
  ): Promise<Instrument> {
    return this.instrumentsService.create(createInstrumentDto);
  }

  @Get()
  findAll(): Promise<Instrument[]> {
    return this.instrumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Instrument> {
    return this.instrumentsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateInstrumentDto: CreateInstrumentDto,
  ): Promise<Instrument> {
    return this.instrumentsService.update(id, updateInstrumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.instrumentsService.remove(id);
  }
}
