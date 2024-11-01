import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Instrument } from './instrument.entity';
import { Musician } from './musician.entity';
import { User } from './user.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  title: string;

  @Column()
  local: string;

  @ManyToOne(() => User, (user) => user.musicians)
  user: User;

  @ManyToOne(() => Instrument, (instrument) => instrument.events, {
    onDelete: 'CASCADE',
  })
  instrument: Instrument;

  @ManyToOne(() => Musician, (musician) => musician.events, {
    onDelete: 'CASCADE',
  })
  musician: Musician;
}
