import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Client } from '@app/my-library/entites/client.entity';

@Resolver(() => Client)
export class UsersResolver {
  
}
