import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthsService } from './auths.service';
import { LoginInput } from './dto/login.input';
import { Auth } from './dto/auth.entity';
import { RegisterInput } from './dto/register.input';

@Resolver(() => Auth)
export class AuthsResolver {
  constructor(private readonly authsService: AuthsService) {}

  @Mutation(() => Auth)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authsService.login(loginInput);
  }

  @Mutation(() => Auth)
  register(@Args('type') type: string, @Args('registerInput') registerInput: RegisterInput) {
    return this.authsService.register(type, registerInput);
  }

  @Query(() => String)
  hello() {
    return 'Hello World!';
  }

}
