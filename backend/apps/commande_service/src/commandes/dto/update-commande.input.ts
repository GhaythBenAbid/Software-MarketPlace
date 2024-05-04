import { CreateCommandeInput } from './create-commande.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCommandeInput extends PartialType(CreateCommandeInput) {
  @Field(() => Int)
  id: number;
}
