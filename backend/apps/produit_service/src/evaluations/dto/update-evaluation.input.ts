import { CreateEvaluationInput } from './create-evaluation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEvaluationInput extends PartialType(CreateEvaluationInput) {
  @Field(() => Int)
  id: number;
}
