import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mySQLConfig } from '@app/my-library/config/mySqlConfig';
import { AdminsModule } from './admins/admins.module';
import { ClientsModule } from './clients/clients.module';
import { VendeursModule } from './vendeurs/vendeurs.module';
import { ReclamationsModule } from './reclamations/reclamations.module';
import { AuthsModule } from './auths/auths.module';

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
    ClientsModule,
    VendeursModule,
    ReclamationsModule,
    AuthsModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
