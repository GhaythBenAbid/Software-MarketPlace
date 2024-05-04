import { Test, TestingModule } from '@nestjs/testing';
import { VendeursResolver } from './vendeurs.resolver';
import { VendeursService } from './vendeurs.service';

describe('VendeursResolver', () => {
  let resolver: VendeursResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendeursResolver, VendeursService],
    }).compile();

    resolver = module.get<VendeursResolver>(VendeursResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
