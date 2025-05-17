import { Test, TestingModule } from '@nestjs/testing';
import { PropertyfeatureController } from './propertyfeature.controller';
import { PropertyfeatureService } from './propertyfeature.service';

describe('PropertyfeatureController', () => {
  let controller: PropertyfeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyfeatureController],
      providers: [PropertyfeatureService],
    }).compile();

    controller = module.get<PropertyfeatureController>(PropertyfeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
