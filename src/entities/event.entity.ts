// src/entities/event.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Instrument } from './instrument.entity';
import { Musician } from './musician.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @ManyToOne(() => Instrument, (instrument) => instrument.events, {
    onDelete: 'CASCADE',
  })
  instrument: Instrument;

  @ManyToOne(() => Musician, (musician) => musician.events, {
    onDelete: 'CASCADE',
  })
  musician: Musician;
}
