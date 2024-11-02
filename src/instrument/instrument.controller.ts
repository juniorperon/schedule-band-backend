// src/instruments/instruments.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { InstrumentsService } from './instrument.service';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { Instrument } from '../entities/instrument.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('instruments')
@UseGuards(AuthGuard)
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Post()
  async create(
    @Body() createInstrumentDto: CreateInstrumentDto,
    @Req() req
  ): Promise<Instrument> {
    const user = req.user
    return this.instrumentsService.create(createInstrumentDto,user);
  }

  @Get()
  asyncfindAll(@Req() req): Promise<Instrument[]> {
    const user = req.user
    return this.instrumentsService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Req() req): Promise<Instrument> {
    const user = req.user;
    return this.instrumentsService.findOne(id, user);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateInstrumentDto: CreateInstrumentDto,
    @Req() req
  ): Promise<Instrument> {
    const user = req.user;
    return this.instrumentsService.update(id, updateInstrumentDto,user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Req() req): Promise<void> {
    const user = req.user;
    return this.instrumentsService.remove(id, user);
  }
}
