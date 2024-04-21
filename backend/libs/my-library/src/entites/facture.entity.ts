import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';
import { Client } from './client.entity';
import { LigneCommande } from './ligne_commande.entity';
import { Commande } from './commande.entity';

@ObjectType()
@Entity()
export class Facture {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    date_facture: Date;

    @Field(() => Client)
    @ManyToOne(() => Client, client => client.factures)
    client: Client;

    @Field(() => Commande)
    @OneToOne(() => Commande, commande => commande.facture)
    commande: Commande;

}