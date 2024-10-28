import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Musician } from './musician.entity';
import { Event } from './event.entity'; // Importar a entidade Event

@Entity()
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relacionamento com Musician (um instrumento pertence a um músico)
  @ManyToOne(() => Musician, (musician) => musician.instruments, {
    onDelete: 'CASCADE',
  })
  musician: Musician;

  // Relacionamento com Event (um instrumento pode ser usado em vários eventos)
  @OneToMany(() => Event, (event) => event.instrument)
  events: Event[];
}
