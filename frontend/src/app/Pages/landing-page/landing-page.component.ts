import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { AuthService } from 'src/app/Services/auth.service';
import { CategorieService } from 'src/app/Services/categorie.service';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  produits : any = [];
  categories : any = [];

  scrollToProducts(){
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({behavior: 'smooth'});
  }

  constructor(private produitService : ProduitService , private categorieService : CategorieService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe((data) => {
      this.produits = (data.data as any).produits;
    });
    this.categorieService.getCategories().subscribe((data) => {
      this.categories = (data.data as any).categories;
    });

  }

  
  

}
