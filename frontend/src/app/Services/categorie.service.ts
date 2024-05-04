import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private apollo:Apollo) { }

  getCategories() {
    return this.apollo.query({
      query: gql`
        query{
          categories{
            id
            nom_categorie
            image
            produits{
              id
              nom_produit
            }
          }
        }
      `
    });
  }


}
