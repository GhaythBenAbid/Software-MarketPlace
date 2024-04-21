import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';

@ObjectType()
@Entity()
export class Categorie {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    nom_categorie: string;

    @Field()
    @Column()
    image: string;

    @Field(() => [Produit])
    produits: Produit[];
    //toadd

}