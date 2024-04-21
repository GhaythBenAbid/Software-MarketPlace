import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Client } from './client.entity';

@ObjectType()
@Entity()
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