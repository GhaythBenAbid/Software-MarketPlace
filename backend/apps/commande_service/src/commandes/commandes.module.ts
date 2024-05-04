import { Module } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CommandesResolver } from './commandes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commande } from '@app/my-library/entites/commande.entity';
import { Client } from '@app/my-library/entites/client.entity';
import { LigneCommande } from '@app/my-library/entites/ligne_commande.entity';
import { Facture } from '@app/my-library/entites/facture.entity';

@Module({
  providers: [CommandesResolver, CommandesService],
  imports: [
    TypeOrmModule.forFeature([Commande , Client , LigneCommande , Facture]),
  ],
})
export class CommandesModule {}
