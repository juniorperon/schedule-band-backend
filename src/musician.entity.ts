import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column('simple-array')
  instruments: string[];
}
