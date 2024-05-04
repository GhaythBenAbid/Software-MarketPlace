import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLigneCommandeInput {
  @Field(() => Int)
  commandeId: number;

  @Field(() => Int)
  produitId: number;

  @Field(() => Int)
  quantite: number;
}
