import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFactureInput {

  date_facture: Date;

  @Field(() => Int)
  clientId: number;

  @Field(() => Int)
  commandeId: number;
  
}
