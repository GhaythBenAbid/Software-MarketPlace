import { Injectable } from '@nestjs/common';
import { CreateProduitInput } from './dto/create-produit.input';
import { UpdateProduitInput } from './dto/update-produit.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Produit } from '@app/my-library/entites/produit.entity';
import { Categorie } from '@app/my-library/entites/categorie.entity';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProduitsService {

  constructor(@InjectRepository(Produit) private produitRepository: Repository<Produit>,
    @InjectRepository(Categorie) private categorieRepository: Repository<Categorie>,
    @InjectRepository(Vendeur) private vendeurRepository: Repository<Vendeur>,
  ) { }

  async create(createProduitInput: CreateProduitInput) {
    const categorie = await this.categorieRepository.findOne({ where: { id: createProduitInput.categorieId } });
    if (!categorie) {
      throw new Error('Categorie not found');
    }
    const vendeur = await this.vendeurRepository.findOne({ where: { id: createProduitInput.vendeurId } });
    if (!vendeur) {
      throw new Error('Vendeur not found');
    }
    const produit = this.produitRepository.create(createProduitInput);
    produit.categorie = categorie;
    produit.vendeur = vendeur;
    return this.produitRepository.save(produit);
  }

  findAll() {
    return this.produitRepository.find({ relations: ['categorie', 'vendeur'] });
  }

  findOne(id: number) {
    return this.produitRepository.findOne({ where: { id }, relations: ['categorie', 'vendeur'] });
  }

  update(id: number, updateProduitInput: UpdateProduitInput) {
    return this.produitRepository.update(id, updateProduitInput);
  }

  remove(id: number) {
    return this.produitRepository.delete(id);
  }

  findByVendeurId(vendeurId: number) {
    return this.produitRepository.find({
      where: {
        vendeur: { id: vendeurId }
      }, relations: ['categorie', 'vendeur']
    });
  }

}
