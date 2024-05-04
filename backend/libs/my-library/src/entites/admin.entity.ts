import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Directive, Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
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

    @Field()
    @Column()
    photo : string;

    //CHECK
    // @Field() : any;
}