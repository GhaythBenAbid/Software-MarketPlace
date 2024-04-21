import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mySQLConfig } from '@app/my-library/config/mySqlConfig';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation : 2,
      }
    }),
    mySQLConfig(),
    AdminsModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
