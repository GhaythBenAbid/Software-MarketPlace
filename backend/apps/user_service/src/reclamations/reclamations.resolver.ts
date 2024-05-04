import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReclamationsService } from './reclamations.service';
import { CreateReclamationInput } from './dto/create-reclamation.input';
import { UpdateReclamationInput } from './dto/update-reclamation.input';
import { Reclamation } from '@app/my-library/entites/reclamation.entity';

@Resolver(() => Reclamation)
export class ReclamationsResolver {
  constructor(private readonly reclamationsService: ReclamationsService) {}

  @Mutation(() => Reclamation)
  createReclamation(@Args('createReclamationInput') createReclamationInput: CreateReclamationInput) {
    return this.reclamationsService.create(createReclamationInput);
  }

  @Query(() => [Reclamation], { name: 'reclamations' })
  findAll() {
    return this.reclamationsService.findAll();
  }

  @Query(() => Reclamation, { name: 'reclamation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reclamationsService.findOne(id);
  }

  @Mutation(() => Reclamation)
  updateReclamation(@Args('updateReclamationInput') updateReclamationInput: UpdateReclamationInput) {
    return this.reclamationsService.update(updateReclamationInput.id, updateReclamationInput);
  }

  @Mutation(() => Reclamation)
  removeReclamation(@Args('id', { type: () => Int }) id: number) {
    return this.reclamationsService.remove(id);
  }
}
