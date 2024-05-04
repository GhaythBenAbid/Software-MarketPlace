import { Injectable } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '@app/my-library/entites/client.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) { }


  create(createClientInput: CreateClientInput) {
    createClientInput.motdepasse = bcrypt.hashSync(createClientInput.motdepasse, 10);
    return this.clientRepository.save(createClientInput);
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: number) {
    return this.clientRepository.findOne({ where: { id } });
  }

  update(id: number, updateClientInput: UpdateClientInput) {
    return this.clientRepository.update(id, updateClientInput);
  }

  remove(id: number) {
    return this.clientRepository.delete(id);
  }
}
