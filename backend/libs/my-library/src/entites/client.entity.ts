import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Reclamation } from './reclamation.entity';
import { Commande } from './commande.entity';
import { Facture } from './facture.entity';

@ObjectType()
@Entity()
export class Client {

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

    @Field(() => [Reclamation])
    reclamations : Reclamation[];

    @Field(() => [Commande])
    commandes : Commande[];

    @Field(() => [Facture])
    factures : Facture[];

    //CHECK
    // @Field() : any;
}