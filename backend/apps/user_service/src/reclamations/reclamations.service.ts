import { Injectable } from '@nestjs/common';
import { CreateReclamationInput } from './dto/create-reclamation.input';
import { UpdateReclamationInput } from './dto/update-reclamation.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Reclamation } from '@app/my-library/entites/reclamation.entity';
import { Repository } from 'typeorm';
import { Client } from '@app/my-library/entites/client.entity';

@Injectable()
export class ReclamationsService {
  constructor(
    @InjectRepository(Reclamation) private reclamationRepository: Repository<Reclamation>,
    @InjectRepository(Client) private clientRepository: Repository<Client>
) { }


  async create(createReclamationInput: CreateReclamationInput) {
    const client = await this.clientRepository.findOne({ where: { id: createReclamationInput.clientId } });
    const reclamation = this.reclamationRepository.create(createReclamationInput);
    reclamation.client = client;
    return this.reclamationRepository.save(reclamation);
  }

  findAll() {
    return this.reclamationRepository.find();
  }

  findOne(id: number) {
    return this.reclamationRepository.findOne({ where: { id } });
  }

  update(id: number, updateReclamationInput: UpdateReclamationInput) {
    return this.reclamationRepository.update(id, updateReclamationInput);
  }

  remove(id: number) {
    return this.reclamationRepository.delete(id);
  }


}
