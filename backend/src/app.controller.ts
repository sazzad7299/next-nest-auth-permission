/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseDatePipe, ParseIntPipe } from '@nestjs/common';
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
  findOneWithoutSlug(@Param('id', ParseIntPipe) id) {
    console.log(typeof id)
    return this.appService.singleData(id);
  }

  @Get(':id/:slug')
  findOneWithSlug(@Param('id', ParseIntPipe) id, @Param('slug') slug) {
    return this.appService.singleData(id, slug);
  }


}
