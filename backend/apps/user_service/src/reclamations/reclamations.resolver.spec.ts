import { Test, TestingModule } from '@nestjs/testing';
import { ReclamationsResolver } from './reclamations.resolver';
import { ReclamationsService } from './reclamations.service';

describe('ReclamationsResolver', () => {
  let resolver: ReclamationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReclamationsResolver, ReclamationsService],
    }).compile();

    resolver = module.get<ReclamationsResolver>(ReclamationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
