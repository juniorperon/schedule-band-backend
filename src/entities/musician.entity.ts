import { Instrument } from 'src/entities/instrument.entity';
import { Event } from 'src/entities/event.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
// import { User } from './user.entity';

@Entity('musician')
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  // @ManyToOne(() => User, (user) => user.musicians)
  // user: User;

  @ManyToMany(() => Instrument, { cascade: true })
  @JoinTable({
    name: 'musician_instruments',
    joinColumn: {
      name: 'musician_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'instrument_id',
      referencedColumnName: 'id',
    },
  })
  instruments: Instrument[];

  @OneToMany(() => Event, (event) => event.musician)
  events: Event[];
}
