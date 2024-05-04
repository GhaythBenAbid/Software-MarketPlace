import { Test, TestingModule } from '@nestjs/testing';
import { LigneCommandesResolver } from './ligne-commandes.resolver';
import { LigneCommandesService } from './ligne-commandes.service';

describe('LigneCommandesResolver', () => {
  let resolver: LigneCommandesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LigneCommandesResolver, LigneCommandesService],
    }).compile();

    resolver = module.get<LigneCommandesResolver>(LigneCommandesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
