import { Musician } from 'src/entities/musician.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('instrument')
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Musician, (musician) => musician.instruments)
  musicians: Musician[];
  events: any;
}
