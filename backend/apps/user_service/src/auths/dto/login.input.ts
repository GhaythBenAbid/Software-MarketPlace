import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
    @Field()
    email: string;

    @Field()
    password: string;
}
