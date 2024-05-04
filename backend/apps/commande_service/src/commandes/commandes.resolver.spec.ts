import { Test, TestingModule } from '@nestjs/testing';
import { CommandesResolver } from './commandes.resolver';
import { CommandesService } from './commandes.service';

describe('CommandesResolver', () => {
  let resolver: CommandesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandesResolver, CommandesService],
    }).compile();

    resolver = module.get<CommandesResolver>(CommandesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
