
import { PropertyFeature } from 'src/module/propertyfeature/entities/propertyfeature.entity';
import { User } from 'src/module/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';

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
}
