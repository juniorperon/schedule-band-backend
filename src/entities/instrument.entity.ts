import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToOne(() => User, (user) => user.instrument) // Associa o Instrument ao User
  // user: User;

  @Column()
  userId: number; // Adiciona o userId
}
