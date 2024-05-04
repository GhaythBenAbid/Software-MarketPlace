import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
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

    @Field()
    photo: string;


}
