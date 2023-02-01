import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscriber')
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  subscribes: boolean;
}
