
import { Property } from "../../../module/property/entities/property.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;

    @Column()
    description: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(
        () => Property,
        (properties) => properties.user
    )

    properties: Property

    @ManyToMany(
        () => Property,
        (property) => property.likeBy
    )
     @JoinTable()
    likedProperties: Property[]
}
