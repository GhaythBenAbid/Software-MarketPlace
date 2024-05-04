import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';
import { Client } from './client.entity';
import { LigneCommande } from './ligne_commande.entity';
import { Facture } from './facture.entity';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
export class Commande {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    date_commande: Date;

    @Field()
    @Column()
    status : String;

    @Field(() => Client)
    @ManyToOne(() => Client, client => client.commandes)
    client: Client;

    @Field(() => [LigneCommande])
    @OneToMany(() => LigneCommande, ligneCommande => ligneCommande.commande)
    ligneCommandes: LigneCommande[];

    @Field(() => Facture)
    @ManyToOne(() => Facture, facture => facture.commande)
    facture: Facture;

}