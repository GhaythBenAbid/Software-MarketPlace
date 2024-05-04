import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommandesService } from './commandes.service';
import { CreateCommandeInput } from './dto/create-commande.input';
import { UpdateCommandeInput } from './dto/update-commande.input';
import { Commande } from '@app/my-library/entites/commande.entity';

@Resolver(() => Commande)
export class CommandesResolver {
  constructor(private readonly commandesService: CommandesService) {}

  @Mutation(() => Commande)
  createCommande(@Args('createCommandeInput') createCommandeInput: CreateCommandeInput) {
    return this.commandesService.create(createCommandeInput);
  }

  @Query(() => [Commande], { name: 'commandes' })
  findAll() {
    return this.commandesService.findAll();
  }

  @Query(() => Commande, { name: 'commande' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commandesService.findOne(id);
  }

  @Mutation(() => Commande)
  updateCommande(@Args('updateCommandeInput') updateCommandeInput: UpdateCommandeInput) {
    return this.commandesService.update(updateCommandeInput.id, updateCommandeInput);
  }

  @Mutation(() => Commande)
  removeCommande(@Args('id', { type: () => Int }) id: number) {
    return this.commandesService.remove(id);
  }

  @Query(() => [Commande], { name: 'commandeEnAttenteByClient' })
  commandeEnAttenteByClient(@Args('clientId', { type: () => Int }) clientId: number) {
    return this.commandesService.getCommandeEnAttenteByClient(clientId);
  }

  @Query(() => [Commande], { name: 'commandeByClient' })
  getCommandeByClient(@Args('clientId', { type: () => Int }) clientId: number) {
    return this.commandesService.getCommandesByClient(clientId);
  }


}
