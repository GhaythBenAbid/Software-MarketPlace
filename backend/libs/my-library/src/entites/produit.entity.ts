import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Categorie } from './categorie.entity';
import { Vendeur } from './vendeur.entity';
import { LigneCommande } from './ligne_commande.entity';
import { Evaluation } from './evaluation.entity';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
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

    //created_at
    @Field()
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Field(() => Categorie)
    @ManyToOne(() => Categorie, categorie => categorie.produits)
    categorie: Categorie;

    @Field(() => Vendeur)
    @ManyToOne(() => Vendeur, vendeur => vendeur.produits)
    vendeur: Vendeur;

    @Field(() => [LigneCommande])
    ligneCommandes: LigneCommande[];

    @Field(() => [Evaluation])
    evaluations : Evaluation[];



}