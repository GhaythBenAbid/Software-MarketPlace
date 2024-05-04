import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommandeInput {
  // @Field(() => Date)
  date_commande: Date;

  @Field(() => Int)
  clientId: number;

  @Field()
  status : String;
}
