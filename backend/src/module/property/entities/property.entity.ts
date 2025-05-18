

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

  @OneToOne(
    () => PropertyFeature,
    (propertyFeature) => propertyFeature.property
  )
  propertyFeature: PropertyFeature

  @ManyToOne(
    () => User,
    (user) => user.properties
  )
  user: User

  @ManyToMany(
    () => User,
    (user) => user.properties
  )

  likeBy: User[]

  @ManyToOne(
    () => PropertyType
  )
  type: PropertyType
}
