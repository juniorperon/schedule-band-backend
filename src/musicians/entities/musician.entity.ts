import { Instrument } from 'src/instrument/entities/instrument.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @ManyToMany(() => Instrument, { cascade: true })
  @JoinTable() // Cria a tabela de relacionamento entre músicos e instrumentos
  instruments: Instrument[];
}
