import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsResolver } from './produits.resolver';
import { Produit } from '@app/my-library/entites/produit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from '@app/my-library/entites/categorie.entity';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';

@Module({
  providers: [ProduitsResolver, ProduitsService],
  imports: [
    TypeOrmModule.forFeature([Produit , Categorie , Vendeur]),
  ],
})
export class ProduitsModule {}
