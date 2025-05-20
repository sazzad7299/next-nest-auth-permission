import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Property } from "./entities/property.entity";
import { Repository } from "typeorm";
import { UpdatePropertyDto } from "./dto/updateProperty.dto";
import { PaginationDto } from "./dto/pagination.dto";
import { DEFAULT_PAGE_SIZE } from './../../utils/constant';



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
    async findAll(paginationDto:PaginationDto){
        return await this.propertyRepo.find({
            skip:paginationDto.skip,
            take:paginationDto.limit 
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