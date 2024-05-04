import { Client } from '@app/my-library/entites/client.entity';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReclamationInput {
  @Field()
  title: string;

  @Field()
  description: string;


  @Field()
  clientId: number;
}
