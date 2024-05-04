import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
export class Vendeur {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    nom: string;

    @Field()
    @Column()
    prenom: string;

    @Field()
    @Column({unique: true})
    email: string;

    @Field()
    @Column()
    motdepasse: string;

    @Field()
    @Column()
    adresse: string;

    @Field()
    @Column()
    telephone : string;

    @Field()
    @Column()
    photo : string;

    @Field(() => [Produit])
    produits: Produit[];

    //CHECK
    // @Field() : any;
}