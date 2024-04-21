import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';
import { Client } from './client.entity';
import { Commande } from './commande.entity';

@ObjectType()
@Entity()
export class LigneCommande {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Commande)
    @ManyToOne(() => Commande, commande => commande.ligneCommandes)
    commande: Commande;

    @Field(() => Produit)
    @ManyToOne(() => Produit, produit => produit.ligneCommandes)
    produit: Produit;

    @Field()
    @Column()
    quantite: number;

}