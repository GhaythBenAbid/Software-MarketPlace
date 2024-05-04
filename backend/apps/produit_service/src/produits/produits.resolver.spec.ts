import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsResolver } from './produits.resolver';
import { ProduitsService } from './produits.service';

describe('ProduitsResolver', () => {
  let resolver: ProduitsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduitsResolver, ProduitsService],
    }).compile();

    resolver = module.get<ProduitsResolver>(ProduitsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
