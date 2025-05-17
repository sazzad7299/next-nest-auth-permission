import { Test, TestingModule } from '@nestjs/testing';
import { PropertyfeatureService } from './propertyfeature.service';

describe('PropertyfeatureService', () => {
  let service: PropertyfeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyfeatureService],
    }).compile();

    service = module.get<PropertyfeatureService>(PropertyfeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
