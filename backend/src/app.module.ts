import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './module/property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {postgresDB } from './configs/database.config';



@Module({
  imports: [PropertyModule,TypeOrmModule.forRoot(postgresDB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
