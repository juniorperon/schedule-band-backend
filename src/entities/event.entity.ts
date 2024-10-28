import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Instrument } from './instrument.entity';
import { Musician } from './musician.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  // Relacionamento com Musician (um evento pode ter um músico)
  @ManyToOne(() => Musician, (musician) => musician.events)
  musician: Musician;

  // Relacionamento com Instrument (um evento pode ter um instrumento)
  @ManyToOne(() => Instrument, (instrument) => instrument.events)
  instrument: Instrument;
}
