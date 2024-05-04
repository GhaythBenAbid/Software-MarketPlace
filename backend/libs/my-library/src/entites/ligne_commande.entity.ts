import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';
import { Client } from './client.entity';
import { Commande } from './commande.entity';
import { on } from 'events';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
export class LigneCommande {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Commande)
    @ManyToOne(() => Commande, commande => commande.ligneCommandes , {onDelete: 'CASCADE'})
    commande: Commande;

    @Field(() => Produit)
    @ManyToOne(() => Produit, produit => produit.ligneCommandes)
    produit: Produit;

    @Field()
    @Column()
    quantite: number;

}