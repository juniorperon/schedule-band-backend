import { Instrument } from 'src/entities/instrument.entity';
import { Event } from 'src/entities/event.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
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

  // Relacionamento com a entidade User (caso seja necessário)
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

  // Relacionamento OneToMany com a entidade Event (um músico pode participar de vários eventos)
  @OneToMany(() => Event, (event) => event.musician)
  events: Event[];
}
