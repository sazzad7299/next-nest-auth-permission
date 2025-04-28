/* eslint-disable prettier/prettier */
import { Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("hello")
  getAll(): string {
    return this.appService.getAll();
  }

  @Get(':id')
  findOneWithoutSlug(
    @Param('id', ParseIntPipe) id,
    @Query('sort', new DefaultValuePipe(false), ParseBoolPipe) sort) {
    return this.appService.singleData(id, '', sort);
  }

  @Get(':id/:slug')
  findOneWithSlug(
    @Param('id', ParseIntPipe) id,
    @Param('slug') slug,
    @Query('sort', new DefaultValuePipe(false), ParseBoolPipe) sort) {
    return this.appService.singleData(id, slug, sort);
  }


}
