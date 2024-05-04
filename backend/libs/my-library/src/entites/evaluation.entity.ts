import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from './client.entity';
import { Produit } from './produit.entity';


@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
export class Evaluation {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    note: number;

    @Field()
    @Column()
    commentaire: string;

    @Field(() => Client)
    @ManyToOne(() => Client, client => client.evaluations)
    client: Client;

    //produit
    @Field(() => Produit)
    @ManyToOne(() => Produit, produit => produit.evaluations)
    produit: Produit;


}