import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private apollo:Apollo) { }

  createProduit(data:any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          createProduit(createProduitInput: {
            nom_produit: "${data.nom_produit}"
            description: "${data.description}"
            image: "${data.image}"
            prix: ${data.prix}
            quantite: ${data.quantite}
            categorieId: ${data.categorieId}
            vendeurId: ${data.vendeurId}
          }) {
            id
            nom_produit
            description
            image
            prix
            quantite
            categorie{
              id
            }
            vendeur{
              id
            }
          }
        }
      `,
    });
  }

  getProduitsByVendeurId(vendeurId:number){
    return this.apollo.query({
      query: gql`
        query{
          produitsByVendeurId(vendeurId : ${vendeurId}){
            id
            nom_produit
            description
            image
            prix
            quantite
            categorie{
              nom_categorie
            }
          }
        }
      `,
    });
  }

  getProduits(){
    return this.apollo.query({
      query: gql`
        query{
          produits{
            id
            nom_produit
            description
            image
            prix
            quantite
            categorie{
              nom_categorie
            }
          }
        }
      `,
    });
  }

  getProduitById(id:any){
    return this.apollo.query({
      query: gql`
        query{
          produit(id : ${id}){
            id
            nom_produit
            description
            image
            prix
            quantite
            categorie{
              nom_categorie
            }
          }
        }
      `,
    });
  }
  
  
}
