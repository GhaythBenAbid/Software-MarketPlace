import { Test, TestingModule } from '@nestjs/testing';
import { VendeursService } from './vendeurs.service';

describe('VendeursService', () => {
  let service: VendeursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendeursService],
    }).compile();

    service = module.get<VendeursService>(VendeursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
