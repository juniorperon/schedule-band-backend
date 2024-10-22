import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Musician } from '../src/musicians/entities/musician.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @ManyToMany(() => Musician)
  @JoinTable()
  musicians: Musician[];
}
