import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';
import { Client } from './client.entity';
import { LigneCommande } from './ligne_commande.entity';
import { Facture } from './facture.entity';

@ObjectType()
@Entity()
export class Commande {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    date_commande: Date;

    @Field(() => Client)
    @ManyToOne(() => Client, client => client.commandes)
    client: Client;

    @Field(() => [LigneCommande])
    ligneCommandes: LigneCommande[];

    @Field(() => Facture)
    facture: Facture;

}