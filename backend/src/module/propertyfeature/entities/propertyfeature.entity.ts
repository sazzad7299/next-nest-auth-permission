
import { Property } from "../../../module/property/entities/property.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('property_features')
export class PropertyFeature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "bedrooms", type: "integer" })
    bedrooms: number
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
