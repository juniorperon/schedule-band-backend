import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MusiciansService } from './musicians.service';

@Controller('musicians')
export class MusiciansController {
  constructor(private musiciansService: MusiciansService) {}

  @Post()
  createMusician(
    @Body('fullName') fullName: string,
    @Body('email') email: string,
    @Body('instruments') instruments: string[],
  ) {
    return this.musiciansService.createMusician(fullName, email, instruments);
  }

  @Get()
  findAll() {
    return this.musiciansService.findAll();
  }

  @Put(':id')
  updateMusician(
    @Param('id') id: number,
    @Body('fullName') fullName: string,
    @Body('email') email: string,
    @Body('instruments') instruments: string[],
  ) {
    return this.musiciansService.updateMusician(
      id,
      fullName,
      email,
      instruments,
    );
  }

  @Delete(':id')
  removeMusician(@Param('id') id: number) {
    return this.musiciansService.removeMusician(id);
  }
}
