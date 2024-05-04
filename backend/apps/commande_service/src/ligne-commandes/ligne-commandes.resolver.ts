import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LigneCommandesService } from './ligne-commandes.service';
import { CreateLigneCommandeInput } from './dto/create-ligne-commande.input';
import { UpdateLigneCommandeInput } from './dto/update-ligne-commande.input';
import { LigneCommande } from '@app/my-library/entites/ligne_commande.entity';

@Resolver(() => LigneCommande)
export class LigneCommandesResolver {
  constructor(private readonly ligneCommandesService: LigneCommandesService) {}

  @Mutation(() => LigneCommande)
  createLigneCommande(@Args('createLigneCommandeInput') createLigneCommandeInput: CreateLigneCommandeInput) {
    return this.ligneCommandesService.create(createLigneCommandeInput);
  }

  @Query(() => [LigneCommande], { name: 'ligneCommandes' })
  findAll() {
    return this.ligneCommandesService.findAll();
  }

  @Query(() => LigneCommande, { name: 'ligneCommande' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ligneCommandesService.findOne(id);
  }

  @Mutation(() => LigneCommande)
  updateLigneCommande(@Args('updateLigneCommandeInput') updateLigneCommandeInput: UpdateLigneCommandeInput) {
    return this.ligneCommandesService.update(updateLigneCommandeInput.id, updateLigneCommandeInput);
  }

  @Mutation(() => LigneCommande)
  removeLigneCommande(@Args('id', { type: () => Int }) id: number) {
    return this.ligneCommandesService.remove(id);
  }

  @Query(() => [LigneCommande], { name: 'ligneCommandeByCommande' })
  getLigneCommandeByCommande(@Args('commandeId', { type: () => Int }) commandeId: number) {
    return this.ligneCommandesService.getLigneCommandeByCommande(commandeId);
  }
}
