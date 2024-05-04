import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  nom_categorie: string;

  @Field()
  image: string;
}
