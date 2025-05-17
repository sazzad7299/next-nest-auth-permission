import { Injectable } from '@nestjs/common';
import { CreatePropertyfeatureDto } from './dto/create-propertyfeature.dto';
import { UpdatePropertyfeatureDto } from './dto/update-propertyfeature.dto';

@Injectable()
export class PropertyfeatureService {
  create(createPropertyfeatureDto: CreatePropertyfeatureDto) {
    return 'This action adds a new propertyfeature';
  }

  findAll() {
    return `This action returns all propertyfeature`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertyfeature`;
  }

  update(id: number, updatePropertyfeatureDto: UpdatePropertyfeatureDto) {
    return `This action updates a #${id} propertyfeature`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertyfeature`;
  }
}
