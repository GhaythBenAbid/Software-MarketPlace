import { CreateReclamationInput } from './create-reclamation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReclamationInput extends PartialType(CreateReclamationInput) {
  @Field(() => Int)
  id: number;
}
