import { Module } from '@nestjs/common';
import { LigneCommandesService } from './ligne-commandes.service';
import { LigneCommandesResolver } from './ligne-commandes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '@app/my-library/entites/client.entity';
import { LigneCommande } from '@app/my-library/entites/ligne_commande.entity';
import { Facture } from '@app/my-library/entites/facture.entity';
import { Commande } from '@app/my-library/entites/commande.entity';
import { Produit } from '@app/my-library/entites/produit.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client , Produit , LigneCommande , Commande]),
  ],
  providers: [LigneCommandesResolver, LigneCommandesService],
})
export class LigneCommandesModule {}
