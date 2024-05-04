import { Module } from '@nestjs/common';
import { ProduitServiceController } from './produit_service.controller';
import { ProduitServiceService } from './produit_service.service';
import { ProduitsModule } from './produits/produits.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { mySQLConfig } from '@app/my-library/config/mySqlConfig';
import { CategoriesModule } from './categories/categories.module';
import { EvaluationsModule } from './evaluations/evaluations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      }
    }),
    mySQLConfig(),
    ProduitsModule,
    CategoriesModule,
    EvaluationsModule
  ],
  controllers: [ProduitServiceController],
  providers: [ProduitServiceService],
})
export class ProduitServiceModule { }
