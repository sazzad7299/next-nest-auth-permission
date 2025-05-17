import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyfeatureService } from './propertyfeature.service';
import { CreatePropertyfeatureDto } from './dto/create-propertyfeature.dto';
import { UpdatePropertyfeatureDto } from './dto/update-propertyfeature.dto';

@Controller('propertyfeature')
export class PropertyfeatureController {
  constructor(private readonly propertyfeatureService: PropertyfeatureService) {}

  @Post()
  create(@Body() createPropertyfeatureDto: CreatePropertyfeatureDto) {
    return this.propertyfeatureService.create(createPropertyfeatureDto);
  }

  @Get()
  findAll() {
    return this.propertyfeatureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyfeatureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyfeatureDto: UpdatePropertyfeatureDto) {
    return this.propertyfeatureService.update(+id, updatePropertyfeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyfeatureService.remove(+id);
  }
}
