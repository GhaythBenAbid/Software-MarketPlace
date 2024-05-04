import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private apollo:Apollo) { }

  getStats(){
    return this.apollo.query({
      query: gql`
        query{
          clients{
            nom
            prenom
          }
          produits{
            nom_produit
            created_at
          }
          vendeurs{
            nom
            prenom
          }
        }
      `
    });
  }


}
