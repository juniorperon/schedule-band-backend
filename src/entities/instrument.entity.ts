import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from './user.entity';

@Entity()
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  events: any;

  // @ManyToOne(() => User, (user) => user.instrument)
  // user: User;

  // @Column()
  // userId: number;
}
