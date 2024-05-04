import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationsResolver } from './evaluations.resolver';
import { EvaluationsService } from './evaluations.service';

describe('EvaluationsResolver', () => {
  let resolver: EvaluationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluationsResolver, EvaluationsService],
    }).compile();

    resolver = module.get<EvaluationsResolver>(EvaluationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
