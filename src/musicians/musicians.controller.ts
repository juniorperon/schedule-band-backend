import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MusicianService } from './musicians.service';
import { CreateMusicianDto } from './dto/create-musician.dto';
import { UpdateMusicianDto } from './dto/update-musician.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Musician } from 'src/entities/musician.entity';


@Controller('musician')
@UseGuards(AuthGuard)
export class MusicianController {
  constructor(private readonly musicianService: MusicianService) {}

  @Post()
  async create(@Body() musician: CreateMusicianDto, @Req() req):Promise<Musician> {
    const userId = req.user.id;
    return this.musicianService.create(musician, userId);
  }

  @Get()
  async findAll(@Req() req) {
    const user = req.user;
    return this.musicianService.findAll(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.musicianService.findOneWithInstruments(Number(id));
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
