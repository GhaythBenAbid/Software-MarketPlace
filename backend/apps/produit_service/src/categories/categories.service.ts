import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Categorie } from '@app/my-library/entites/categorie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Categorie) private categoryRepository: Repository<Categorie>,

  ) { }

  async create(createCategoryInput: CreateCategoryInput) {
    const category = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find({
      relations: ['produits']
    });
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({ where: { id }, relations: ['produits'] });
  }


  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return this.categoryRepository.update(id, updateCategoryInput);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }

  


}
