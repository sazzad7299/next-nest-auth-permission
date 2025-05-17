import { Property } from "src/module/property/entites/property.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
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

    @OneToMany(
        () => Property,
        (properties) => properties.user
    )

    properties: Property


}
