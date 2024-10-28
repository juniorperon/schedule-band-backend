import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { Musician } from './musician.entity';
// import { Instrument } from './instrument.entity';
// import { Event } from './event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // @OneToMany(() => Musician, (musician) => musician.user)
  // musicians: Musician[];

  // @OneToMany(() => Instrument, (instrument) => instrument.user)
  // instrument: Instrument[];

  // @OneToMany(() => Event, (event) => event.user)
  // event: Event[];
}
