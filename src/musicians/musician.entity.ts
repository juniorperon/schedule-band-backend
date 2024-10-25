import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column('simple-array') // Para armazenar uma lista de instrumentos
  instruments: string[];
}
