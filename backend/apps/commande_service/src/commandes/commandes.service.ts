import { Injectable } from '@nestjs/common';
import { CreateCommandeInput } from './dto/create-commande.input';
import { UpdateCommandeInput } from './dto/update-commande.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Commande } from '@app/my-library/entites/commande.entity';
import { Repository } from 'typeorm';
import { Client } from '@app/my-library/entites/client.entity';
import { LigneCommande } from '@app/my-library/entites/ligne_commande.entity';
import { Facture } from '@app/my-library/entites/facture.entity';

@Injectable()
export class CommandesService {
  constructor(
    @InjectRepository(Commande) private commandeRepository: Repository<Commande>,
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    @InjectRepository(LigneCommande) private ligneCommandeRepository: Repository<LigneCommande>,
    @InjectRepository(Facture) private factureRepository: Repository<Facture>,
  ) { }

  async create(createCommandeInput: CreateCommandeInput) {
    const client = await this.clientRepository.findOne({ where: { id: createCommandeInput.clientId } });
    if (!client) {
      throw new Error('Client not found');
    }
    const commande = this.commandeRepository.create(createCommandeInput);
    commande.date_commande = new Date();
    commande.client = client;
    return this.commandeRepository.save(commande);
  }

  findAll() {
    return this.commandeRepository.find({ relations: ['client', 'ligneCommandes', 'facture'] });
  }

  findOne(id: number) {
    return this.commandeRepository.findOne({ where: { id }, relations: ['client', 'ligneCommandes', 'facture' , 'ligneCommandes.produit'] });
  }


  update(id: number, updateCommandeInput: any) {
    this.commandeRepository.update(id, updateCommandeInput);
    return this.commandeRepository.findOne({ where: { id }, relations: ['client', 'ligneCommandes', 'facture'] });
  }

  remove(id: number) {
    return this.commandeRepository.delete(id);
  }


  getCommandeEnAttenteByClient(clientId: number) {
    return this.commandeRepository.find({ where: { client : { id : clientId } , status : 'En attente' } });
  }

  getCommandesByClient(clientId: number) {
    return this.commandeRepository.find({ where: { client : { id : clientId } }, relations: ['client' , 'ligneCommandes' , 'facture' , 'ligneCommandes.produit'] });
  }
}
