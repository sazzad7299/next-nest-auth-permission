import { Property } from "src/module/property/entites/property.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { number, string } from "zod";
@Entity('property_features')
export class PropertyFeature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "bedrooms", type: "varchar" })
    bedrooms: string
    @Column({ name: 'parking_spot', type: "varchar" })
    parkingSpot: string
    @Column({ name: 'created_at', type: Date })
    createdAt: Date

    @OneToOne(
        () => Property,
        (property) => property.propertyFeature
    )
    @JoinColumn({ name: "property_id" })
    @Column({ name: "property_id", nullable: true })
    propertyId: number
    property: Property
}
