import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './module/property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDB } from './configs/database.config';
import { UserModule } from './module/user/user.module';
import { PropertyfeatureModule } from './module/propertyfeature/propertyfeature.module';



@Module({
  imports: [PropertyModule, TypeOrmModule.forRoot({
    ...postgresDB,
    autoLoadEntities: true,
  }), UserModule, PropertyfeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
