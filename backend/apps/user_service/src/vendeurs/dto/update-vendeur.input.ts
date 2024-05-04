import { CreateVendeurInput } from './create-vendeur.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVendeurInput extends PartialType(CreateVendeurInput) {
  @Field(() => Int)
  id: number;
}
