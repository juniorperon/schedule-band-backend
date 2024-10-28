import { Instrument } from 'src/entities/instrument.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

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
  events: any;
}
