

import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany } from 'typeorm';
import { PropertyType } from './propertyType.entity';
import { PropertyFeature } from '../../../module/propertyfeature/entities/propertyfeature.entity';
import { User } from '../../../module/user/entities/user.entity';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'price', type: Number })
  price: number

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, user => user.properties)
  user: User;

  @ManyToOne(() => PropertyType, type => type.properties)
  type: PropertyType;

  @ManyToOne(() => PropertyFeature, (feature) => feature.property)
  propertyFeature: PropertyFeature;

   @ManyToMany(
    () => User,
    (user) => user.likedProperties
  )
 
  likeBy: User[]

}
