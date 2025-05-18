import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Property } from "./entities/property.entity";
import { Repository } from "typeorm";
import { UpdatePropertyDto } from "./dto/updateProperty.dto";


@Injectable()
export class PropertyService {
    constructor(
        @InjectRepository(Property) private propertyRepo: Repository<Property>
    ) { }

    async findOne(id: number) {
        return this.propertyRepo.findOne({
            where: { id }
        })

    }
    async create(dto: any) {

        return await this.propertyRepo.save(dto.data)
    }

    async update(id: number, dto: UpdatePropertyDto) {
        return this.propertyRepo.update({ id }, dto)
    }

    async delete(id: number) {
        return this.propertyRepo.delete(id)
    }
}