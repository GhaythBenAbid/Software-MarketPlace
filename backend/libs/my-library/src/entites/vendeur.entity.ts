import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Produit } from './produit.entity';

@ObjectType()
@Entity()
export class Vendeur {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column({unique: true})
    email: string;

    @Field()
    @Column()
    password: string;

    @Field()
    @Column()
    address: string;

    @Field()
    @Column()
    phone : string;

    @Field(() => [Produit])
    produits: Produit[];

    //CHECK
    // @Field() : any;
}