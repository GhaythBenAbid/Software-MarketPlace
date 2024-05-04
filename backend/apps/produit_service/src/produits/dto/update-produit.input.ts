import { CreateProduitInput } from './create-produit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProduitInput extends PartialType(CreateProduitInput) {
  @Field(() => Int)
  id: number;
}
