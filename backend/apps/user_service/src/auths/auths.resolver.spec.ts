import { Test, TestingModule } from '@nestjs/testing';
import { AuthsResolver } from './auths.resolver';
import { AuthsService } from './auths.service';

describe('AuthsResolver', () => {
  let resolver: AuthsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthsResolver, AuthsService],
    }).compile();

    resolver = module.get<AuthsResolver>(AuthsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
