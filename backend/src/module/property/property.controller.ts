import { Body, Controller, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto, CreatePropertySingleDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { zodValidationPipe } from './pipes/zodvalidationPipe';
import { CreatePropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import {HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(){
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
    
    findOne(
        @Param("id", ParseIdPipe) id, @Query("sort", ParseBoolPipe) sort: boolean,
        @RequestHeader(HeadersDto) headers: HeadersDto
    ){
        
        return  headers;
        return {
            id: 1,
            name: 'Property 1',
            description: 'Description of Property 1',
            price: 100000,
        };
    }
    @Post()
    
    @HttpCode(202)
    @UsePipes(new zodValidationPipe(CreatePropertySchema))
    create(@Body() body: CreatePropertyZodDto,){
        return body;
        
    }
}
