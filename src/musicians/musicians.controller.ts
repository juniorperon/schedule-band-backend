import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MusicianService } from './musicians.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { Musician } from 'src/entities/musician.entity';
import { UpdateMusicianDto } from './dto/update-musician.dto';

@Controller('musician')
export class MusicianController {
  constructor(private readonly musicianService: MusicianService) {}

  @Get()
  findAll() {
    return this.musicianService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.musicianService.findOneWithInstruments(Number(id));
  }

  @Post()
  create(@Body() musician: CreateMusicianDto) {
    return this.musicianService.create(musician);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() musician: UpdateMusicianDto) {
    return this.musicianService.update(+id, musician);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicianService.delete(+id);
  }
}
