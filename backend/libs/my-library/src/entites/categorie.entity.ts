import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
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
    @OneToMany(() => Produit, produit => produit.categorie)
    produits: Produit[];
    //toadd

}