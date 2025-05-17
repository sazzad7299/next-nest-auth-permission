import { Body, Controller, Delete, Get, Headers, HttpCode, NotFoundException, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto, CreatePropertySingleDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { zodValidationPipe } from './pipes/zodvalidationPipe';
import { CreatePropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
    constructor(private propertyService: PropertyService) { }

    @Get()
    findAll() {
        return [
            {
                id: 1,
                name: 'Property 1',
                description: 'Description of Property 1',
                price: 100000,
            },
            {
                id: 2,
                name: 'Property 2',
                description: 'Description of Property 2',
                price: 200000,
            },
        ];
    }
    @Get(':id')

    async findOne(
        @Param("id", ParseIdPipe) id, @Query("sort", ParseBoolPipe) sort: boolean,
        @RequestHeader(HeadersDto) headers: HeadersDto
    ) {

        const property = await this.propertyService.findOne(id)

        if (!property) throw new NotFoundException("hello");

        return property
    }
    @Post()

    @HttpCode(202)
    @UsePipes(new zodValidationPipe(CreatePropertySchema))
    create(@Body() dto: CreatePropertyZodDto) {
        // return dto
        return this.propertyService.create(dto);

    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdatePropertyDto) {
        return this.propertyService.update(+id, dto);
    }
    @Delete(':id')
    deletedata(@Param('id', ParseIdPipe) id) {
        return this.propertyService.delete(id)
    }
}
