import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Musician } from './musician.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @ManyToOne(() => Musician, (musician) => musician.events, { eager: true })
  musician: Musician;
}

// @ManyToOne(() => User, (user) => user.event)
// user: User;

// @Column()
// userId: number;
