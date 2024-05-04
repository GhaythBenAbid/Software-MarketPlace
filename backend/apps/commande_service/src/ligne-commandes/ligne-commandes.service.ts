import { Injectable } from '@nestjs/common';
import { CreateLigneCommandeInput } from './dto/create-ligne-commande.input';
import { UpdateLigneCommandeInput } from './dto/update-ligne-commande.input';
import { Repository } from 'typeorm';
import { Produit } from '@app/my-library/entites/produit.entity';
import { Commande } from '@app/my-library/entites/commande.entity';
import { LigneCommande } from '@app/my-library/entites/ligne_commande.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LigneCommandesService {

  constructor(
    @InjectRepository(LigneCommande) private ligneCommandeRepository: Repository<LigneCommande>,
    @InjectRepository(Commande) private commandeRepository: Repository<Commande>,
    @InjectRepository(Produit) private produitRepository: Repository<Produit>,
  ) {}

  async create(createLigneCommandeInput: CreateLigneCommandeInput) {
    const commande = await this.commandeRepository.findOne({ where: { id: createLigneCommandeInput.commandeId } });
    if (!commande) {
      throw new Error('Commande not found');
    }
    const produit = await this.produitRepository.findOne({ where: { id: createLigneCommandeInput.produitId } });
    if (!produit) {
      throw new Error('Produit not found');
    }
    const ligneCommande = this.ligneCommandeRepository.create(createLigneCommandeInput);
    ligneCommande.commande = commande;
    ligneCommande.produit = produit;
    return this.ligneCommandeRepository.save(ligneCommande);
  }

  findAll() {
    return this.ligneCommandeRepository.find({ relations: ['commande', 'produit'] });
  }

  findOne(id: number) {
    return this.ligneCommandeRepository.findOne({ where: { id }, relations: ['commande', 'produit'] });
  }

  update(id: number, updateLigneCommandeInput: UpdateLigneCommandeInput) {
    return this.ligneCommandeRepository.update(id, updateLigneCommandeInput);
  }

  remove(id: number) {
    return this.ligneCommandeRepository.delete(id);
  }

  getLigneCommandeByCommande(commandeId: number) {
    return this.ligneCommandeRepository.find({ where: { commande : { id : commandeId } } , relations: ['produit' , 'commande'] });
  }

}
