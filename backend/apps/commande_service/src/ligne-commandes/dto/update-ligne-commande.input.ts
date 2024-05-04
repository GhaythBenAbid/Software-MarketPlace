import { CreateLigneCommandeInput } from './create-ligne-commande.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLigneCommandeInput extends PartialType(CreateLigneCommandeInput) {
  @Field(() => Int)
  id: number;
}
