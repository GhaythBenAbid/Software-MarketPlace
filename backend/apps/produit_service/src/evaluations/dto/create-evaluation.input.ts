import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEvaluationInput {
  @Field()
  note: number;

  @Field()
  commentaire: string;

  @Field(() => Int)
  clientId: number;

  @Field(() => Int)
  produitId: number;
}
