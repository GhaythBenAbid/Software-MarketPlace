import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProduitInput {
  @Field()
  nom_produit: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field(() => Float)
  prix: number;

  @Field(() => Int)
  quantite: number;

  @Field(() => Int)
  categorieId: number;

  @Field(() => Int)
  vendeurId: number;
}
