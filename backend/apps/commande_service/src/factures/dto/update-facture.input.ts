import { CreateFactureInput } from './create-facture.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFactureInput extends PartialType(CreateFactureInput) {
  @Field(() => Int)
  id: number;
}
