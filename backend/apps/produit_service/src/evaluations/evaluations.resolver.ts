import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationInput } from './dto/create-evaluation.input';
import { UpdateEvaluationInput } from './dto/update-evaluation.input';
import { Evaluation } from '@app/my-library/entites/evaluation.entity';

@Resolver(() => Evaluation)
export class EvaluationsResolver {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Mutation(() => Evaluation)
  createEvaluation(@Args('createEvaluationInput') createEvaluationInput: CreateEvaluationInput) {
    return this.evaluationsService.create(createEvaluationInput);
  }

  @Query(() => [Evaluation], { name: 'evaluations' })
  findAll() {
    return this.evaluationsService.findAll();
  }

  @Query(() => Evaluation, { name: 'evaluation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.evaluationsService.findOne(id);
  }

  @Mutation(() => Evaluation)
  updateEvaluation(@Args('updateEvaluationInput') updateEvaluationInput: UpdateEvaluationInput) {
    return this.evaluationsService.update(updateEvaluationInput.id, updateEvaluationInput);
  }

  @Mutation(() => Evaluation)
  removeEvaluation(@Args('id', { type: () => Int }) id: number) {
    return this.evaluationsService.remove(id);
  }

  @Query(() => [Evaluation])
  getEvaluationsByProduitId(@Args('produitId', { type: () => Int }) produitId: number) {
    return this.evaluationsService.getEvaluationsByProduitId(produitId);
  }
}
