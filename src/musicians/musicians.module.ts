import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musician } from '../entities/musician.entity';
import { MusicianService } from './musicians.service';
import { MusicianController } from './musicians.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Musician])],
  providers: [MusicianService],
  exports: [MusicianService],
  controllers: [MusicianController],
})
export class MusicianModule {}
