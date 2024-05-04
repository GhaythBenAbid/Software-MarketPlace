import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { Categorie } from '@app/my-library/entites/categorie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CategoriesResolver, CategoriesService],
  imports: [
    TypeOrmModule.forFeature([Categorie]),
  ],
})
export class CategoriesModule {}
