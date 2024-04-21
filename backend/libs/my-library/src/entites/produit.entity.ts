import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Categorie } from './categorie.entity';
import { Vendeur } from './vendeur.entity';
import { LigneCommande } from './ligne_commande.entity';

@ObjectType()
@Entity()
export class Produit {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    nom_produit: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    image: string;

    @Field()
    @Column()
    prix: number;

    @Field()
    @Column()
    quantite: number;

    @Field(() => Categorie)
    @ManyToOne(() => Categorie, categorie => categorie.produits)
    categorie: Categorie;

    @Field(() => Vendeur)
    @ManyToOne(() => Vendeur, vendeur => vendeur.produits)
    vendeur: Vendeur;

    @Field(() => [LigneCommande])
    ligneCommandes: LigneCommande[];


    //toadd

}