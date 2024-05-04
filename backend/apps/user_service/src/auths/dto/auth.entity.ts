import { Directive, Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive(`@key(fields: "id")`)
@Directive('@shareable')
export class Auth {

    @Field(() => Int)
    id: number;

    @Field()
    nom: string;

    @Field()
    prenom: string;

    @Field()
    email: string;

    @Field()
    motdepasse: string;

    @Field()
    adresse: string;

    @Field({nullable: true})
    token?: string;

    @Field({nullable: true})
    type?: string;

}