import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Musician } from './musician.entity';
import { Instrument } from './instrument.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @ManyToOne(() => Musician, (musician) => musician.events, { eager: true })
  musician: Musician;

  @ManyToOne(() => Instrument, (instrument) => instrument.events, {
    eager: true,
  })
  instrument: Instrument;

  // Adicionando os IDs como colunas explícitas
  @Column({ nullable: true })
  musicianId: number;

  @Column({ nullable: true })
  instrumentId: number;
}
