import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicianService } from './musicians.service';
import { MusicianController } from './musicians.controller';
import { Musician } from './entities/musician.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Musician])],
  controllers: [MusicianController],
  providers: [MusicianService],
})
export class MusiciansModule {}
