import { Module } from '@nestjs/common';
import { CommandeServiceController } from './commande_service.controller';
import { CommandeServiceService } from './commande_service.service';
import { CommandesModule } from './commandes/commandes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { mySQLConfig } from '@app/my-library/config/mySqlConfig';
import { LigneCommandesModule } from './ligne-commandes/ligne-commandes.module';
import { FacturesModule } from './factures/factures.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      }
    }),
    mySQLConfig(),
    
    CommandesModule,
    
    LigneCommandesModule,
    
    FacturesModule
  ],
  controllers: [CommandeServiceController],
  providers: [CommandeServiceService],
})
export class CommandeServiceModule {}
