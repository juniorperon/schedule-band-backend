import { Musician } from 'src/entities/musician.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToMany(() => Musician, { cascade: true })
  @JoinTable({
    name: 'event_musicians',
    joinColumn: {
      name: 'event_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'musician_id',
      referencedColumnName: 'id',
    },
  })
  musicians: Musician[];
}
