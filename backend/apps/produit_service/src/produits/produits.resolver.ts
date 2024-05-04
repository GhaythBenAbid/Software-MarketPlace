import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProduitsService } from './produits.service';
import { CreateProduitInput } from './dto/create-produit.input';
import { UpdateProduitInput } from './dto/update-produit.input';
import { Produit } from '@app/my-library/entites/produit.entity';

@Resolver(() => Produit)
export class ProduitsResolver {
  constructor(private readonly produitsService: ProduitsService) {}

  @Mutation(() => Produit)
  createProduit(@Args('createProduitInput') createProduitInput: CreateProduitInput) {
    return this.produitsService.create(createProduitInput);
  }

  @Query(() => [Produit], { name: 'produits' })
  findAll() {
    return this.produitsService.findAll();
  }

  @Query(() => Produit, { name: 'produit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.produitsService.findOne(id);
  }

  @Mutation(() => Produit)
  updateProduit(@Args('updateProduitInput') updateProduitInput: UpdateProduitInput) {
    return this.produitsService.update(updateProduitInput.id, updateProduitInput);
  }

  @Mutation(() => Produit)
  removeProduit(@Args('id', { type: () => Int }) id: number) {
    return this.produitsService.remove(id);
  }

  @Query(() => [Produit], { name: 'produitsByVendeurId' })
  findByVendeurId(@Args('vendeurId', { type: () => Int }) vendeurId: number) {
    return this.produitsService.findByVendeurId(vendeurId);
  }
}
