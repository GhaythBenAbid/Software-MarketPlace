import { Injectable } from '@nestjs/common';
import { CreateVendeurInput } from './dto/create-vendeur.input';
import { UpdateVendeurInput } from './dto/update-vendeur.input';
import * as bcrypt from 'bcrypt';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VendeursService {
  constructor(@InjectRepository(Vendeur) private vendeurRepository: Repository<Vendeur>) { }


  create(createVendeurInput: CreateVendeurInput) {
    createVendeurInput.motdepasse = bcrypt.hashSync(createVendeurInput.motdepasse, 10);

    return this.vendeurRepository.save(createVendeurInput);
  }

  findAll() {
    return this.vendeurRepository.find();
  }

  findOne(id: number) {
    return this.vendeurRepository.findOne({ where: { id } });
  }

  update(id: number, updateVendeurInput: UpdateVendeurInput) {
    return this.vendeurRepository.update(id, updateVendeurInput).then(() => {
      return this.vendeurRepository.findOne({ where: { id } });
    });
  }

  remove(id: number) {
    return this.vendeurRepository.delete(id);
  }
}
