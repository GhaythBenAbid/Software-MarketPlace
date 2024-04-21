import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType("AdminInput")
@Entity()
export class Admin {

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

    //CHECK
    // @Field() : any;
}