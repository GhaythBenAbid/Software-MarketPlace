import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VendeursService } from './vendeurs.service';
import { CreateVendeurInput } from './dto/create-vendeur.input';
import { UpdateVendeurInput } from './dto/update-vendeur.input';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';

@Resolver(() => Vendeur)
export class VendeursResolver {
  constructor(private readonly vendeursService: VendeursService) {}

  @Mutation(() => Vendeur)
  createVendeur(@Args('createVendeurInput') createVendeurInput: CreateVendeurInput) {
    return this.vendeursService.create(createVendeurInput);
  }

  @Query(() => [Vendeur], { name: 'vendeurs' })
  findAll() {
    return this.vendeursService.findAll();
  }

  @Query(() => Vendeur, { name: 'vendeur' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vendeursService.findOne(id);
  }

  @Mutation(() => Vendeur)
  updateVendeur(@Args('updateVendeurInput') updateVendeurInput: UpdateVendeurInput) {
    return this.vendeursService.update(updateVendeurInput.id, updateVendeurInput);
  }

  @Mutation(() => Vendeur)
  removeVendeur(@Args('id', { type: () => Int }) id: number) {
    return this.vendeursService.remove(id);
  }
}
