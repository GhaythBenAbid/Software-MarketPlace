import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Client } from './client.entity';

@ObjectType()
@Entity()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
export class Reclamation {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    description: string;

    @Field(() => Client)
    @ManyToOne(() => Client, client => client.reclamations)
    client: Client;

}