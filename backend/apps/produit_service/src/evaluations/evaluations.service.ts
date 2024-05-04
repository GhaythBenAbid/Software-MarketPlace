import { Injectable } from '@nestjs/common';
import { CreateEvaluationInput } from './dto/create-evaluation.input';
import { UpdateEvaluationInput } from './dto/update-evaluation.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Evaluation } from '@app/my-library/entites/evaluation.entity';
import { Produit } from '@app/my-library/entites/produit.entity';
import { Client } from '@app/my-library/entites/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluationsService {

  constructor(
    @InjectRepository(Evaluation) private evaluationRepository: Repository<Evaluation>,
    @InjectRepository(Produit) private produitRepository: Repository<Produit>,
    @InjectRepository(Client) private clientRepository: Repository<Client>
  ) { }

  async create(createEvaluationInput: CreateEvaluationInput) {
    const produit = await this.produitRepository.findOne({ where: { id: createEvaluationInput.produitId } });
    if (!produit) {
      throw new Error('Produit not found');
    }
    const client = await this.clientRepository.findOne({ where: { id: createEvaluationInput.clientId } });
    if (!client) {
      throw new Error('Client not found');
    }
    const evaluation = this.evaluationRepository.create(createEvaluationInput);
    evaluation.produit = produit;
    evaluation.client = client;
    return this.evaluationRepository.save(evaluation);
  }

  findAll() {
    return this.evaluationRepository.find({ relations: ['client', 'produit'] });
  }

  findOne(id: number) {
    return this.evaluationRepository.findOne({ where: { id }, relations: ['client', 'produit'] });
  }

  update(id: number, updateEvaluationInput: UpdateEvaluationInput) {
    return this.evaluationRepository.update(id, updateEvaluationInput);
  }

  remove(id: number) {
    return this.evaluationRepository.delete(id);
  }

  getEvaluationsByProduitId(produitId: number) {
    return this.evaluationRepository.find({
      where: {
        produit: { id: produitId }
      }, relations: ['client', 'produit']
    });
  }


}
