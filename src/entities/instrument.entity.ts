import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Event } from './event.entity';
import { User } from './user.entity';

@Entity()
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.musicians)
  user: User;

  @OneToMany(() => Event, (event) => event.instrument)
  events: Event[];
}
