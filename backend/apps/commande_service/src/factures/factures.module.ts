import { Module } from '@nestjs/common';
import { FacturesService } from './factures.service';
import { FacturesResolver } from './factures.resolver';
import { Client } from '@app/my-library/entites/client.entity';
import { Commande } from '@app/my-library/entites/commande.entity';
import { Facture } from '@app/my-library/entites/facture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Facture, Commande, Client]),
  ],
  providers: [FacturesResolver, FacturesService],
})
export class FacturesModule {}
