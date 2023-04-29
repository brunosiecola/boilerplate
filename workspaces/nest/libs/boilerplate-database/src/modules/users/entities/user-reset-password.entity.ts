import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserResetPassword {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id, { nullable: false })
  @JoinColumn({ name: 'userId' })
  userId: number;

  @Column({ type: 'char', length: 128, nullable: false })
  token: string;

  @Column({ type: 'bigint', nullable: false })
  createdAt: number;

  @Column({ type: 'bigint', nullable: true })
  updatedAt: number;

}
