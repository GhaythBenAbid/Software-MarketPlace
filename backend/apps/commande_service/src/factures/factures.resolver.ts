import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FacturesService } from './factures.service';
import { CreateFactureInput } from './dto/create-facture.input';
import { UpdateFactureInput } from './dto/update-facture.input';
import { Facture } from '@app/my-library/entites/facture.entity';

@Resolver(() => Facture)
export class FacturesResolver {
  constructor(private readonly facturesService: FacturesService) {}

  @Mutation(() => Facture)
  createFacture(@Args('createFactureInput') createFactureInput: CreateFactureInput) {
    return this.facturesService.create(createFactureInput);
  }

  @Query(() => [Facture], { name: 'factures' })
  findAll() {
    return this.facturesService.findAll();
  }

  @Query(() => Facture, { name: 'facture' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.facturesService.findOne(id);
  }

  @Mutation(() => Facture)
  updateFacture(@Args('updateFactureInput') updateFactureInput: UpdateFactureInput) {
    return this.facturesService.update(updateFactureInput.id, updateFactureInput);
  }

  @Mutation(() => Facture)
  removeFacture(@Args('id', { type: () => Int }) id: number) {
    return this.facturesService.remove(id);
  }
}
