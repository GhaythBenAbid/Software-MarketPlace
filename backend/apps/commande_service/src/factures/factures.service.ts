import { Client } from "@app/my-library/entites/client.entity";
import { Commande } from "@app/my-library/entites/commande.entity";
import { Facture } from "@app/my-library/entites/facture.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFactureInput } from "./dto/create-facture.input";
import { Repository } from "typeorm";


@Injectable()
export class FacturesService {

  constructor(
    @InjectRepository(Facture) private factureRepository: Repository<Facture>,
    @InjectRepository(Commande) private commandeRepository: Repository<Commande>,
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async create(createFactureInput: CreateFactureInput) {
    const commande = await this.commandeRepository.findOne({ where: { id: createFactureInput.commandeId } });
    if (!commande) {
      throw new Error('Commande not found');
    }

    const client = await this.clientRepository.findOne({ where: { id: createFactureInput.clientId } });
    if (!client) {
      throw new Error('Client not found');
    }

    const facture = this.factureRepository.create(createFactureInput);
    facture.date_facture = new Date();
    facture.commande = commande;
    facture.client = client;
    return this.factureRepository.save(facture);
  }

  findAll() {
    return this.factureRepository.find({ relations: ['commande', 'client'] });
  }

  findOne(id: number) {
    return this.factureRepository.findOne({ where: { id }, relations: ['commande', 'client'] });
  }

  update(id: number, updateFactureInput: any) {
    this.factureRepository.update(id, updateFactureInput);
    return this.factureRepository.findOne({ where: { id }, relations: ['commande', 'client'] });
  }

  remove(id: number) {
    return this.factureRepository.delete(id);
  }

  



}
