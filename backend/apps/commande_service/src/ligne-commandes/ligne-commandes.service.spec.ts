import { Test, TestingModule } from '@nestjs/testing';
import { LigneCommandesService } from './ligne-commandes.service';

describe('LigneCommandesService', () => {
  let service: LigneCommandesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LigneCommandesService],
    }).compile();

    service = module.get<LigneCommandesService>(LigneCommandesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
