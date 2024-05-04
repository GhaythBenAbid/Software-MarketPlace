import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private apollo: Apollo) { }

  // mutation{
  //   createFacture(createFactureInput:{
  //     clientId : 8,
  //     commandeId : 8
  //   }){
  //     id
  //     date_facture
  //     client{
  //       id
  //       nom
  //       prenom
  //       email
  //       adresse
  //     }
  //     commande{
  //       id
  //     }
      
  //   }}
  createFacture(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          createFacture(createFactureInput: { clientId: ${data.clientId}, commandeId: ${data.commandeId} }) {
            id
            date_facture
            client{
              id
              nom
              prenom
              email
              adresse
            }
            commande{
              id
            }
          }
        }
      `
    });
  }
}
