import { Module } from '@nestjs/common';
import { PropertyfeatureService } from './propertyfeature.service';
import { PropertyfeatureController } from './propertyfeature.controller';

@Module({
  controllers: [PropertyfeatureController],
  providers: [PropertyfeatureService],
})
export class PropertyfeatureModule {}
