
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({name:'price',type:Number})
  price:number
  
  @Column({ default: true })
  isActive: boolean;
}
