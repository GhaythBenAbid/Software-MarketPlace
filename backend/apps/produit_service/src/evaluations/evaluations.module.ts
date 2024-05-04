import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsResolver } from './evaluations.resolver';
import { Evaluation } from '@app/my-library/entites/evaluation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from '@app/my-library/entites/produit.entity';
import { Client } from '@app/my-library/entites/client.entity';

@Module({
  providers: [EvaluationsResolver, EvaluationsService],
  imports: [
    TypeOrmModule.forFeature([Evaluation , Produit , Client]),
  ],
})
export class EvaluationsModule {}
