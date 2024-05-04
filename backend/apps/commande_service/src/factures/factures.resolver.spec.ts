import { Test, TestingModule } from '@nestjs/testing';
import { FacturesResolver } from './factures.resolver';
import { FacturesService } from './factures.service';

describe('FacturesResolver', () => {
  let resolver: FacturesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacturesResolver, FacturesService],
    }).compile();

    resolver = module.get<FacturesResolver>(FacturesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
