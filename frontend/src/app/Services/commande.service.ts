import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private apollo: Apollo) { }

  createCommande(clientId: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          createCommande(createCommandeInput: { clientId: ${clientId}, status: "En attente" }) {
            id
            date_commande
            status
          }
        }
      `
    });
  }

  commandeByClient(clientId: any) {
    return this.apollo.query({
      query: gql`
        query {
          commandeEnAttenteByClient(clientId : ${clientId}){
            id
            date_commande
            status
          }
        }
      `
    });
  }


  createLigneCommande(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          createLigneCommande(createLigneCommandeInput: 
            { 
              commandeId: ${data.commandeId}, 
              produitId: ${data.produitId}, 
              quantite: ${data.quantite} 
            }
          ) {
            id
            commande{
              id
            }
            produit{
              id
            }
            quantite
          }
        }
      `
    });
  }


  ligneCommandeByCommande(commandeId: any) {
    return this.apollo.query({
      query: gql`
        query {
          ligneCommandeByCommande(commandeId : ${commandeId}){
            id
            commande{
              id
              date_commande
              status
            }
            produit{
              id
              nom_produit
              description
              image
              prix
            }
            quantite
          }
        }
      `
    });
  }

  getAllCommandesByClient(clientId: any) {
    return this.apollo.query({
      query: gql`
        query {
          commandeByClient(clientId : ${clientId}){
            id
            date_commande
            status
            ligneCommandes{
              produit{
                id
                nom_produit
                description
                image
                prix
              }
              quantite
            }
          }
        }
      `
    });
  }

  updateCommande(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          updateCommande(updateCommandeInput: { id: ${data.id}, status: "${data.status}" }) {
            id
            date_commande
            status
          }
        }
      `
    });
  }


  getCommandeById(id: any) {
    return this.apollo.query({
      query: gql`
        query {
          commande(id : ${id}){
            id
            date_commande
            status
            client{
              id
              nom
              prenom
              email
              motdepasse
              adresse
            }
            ligneCommandes{
              id
              produit{
                id
                nom_produit
                description
                image
                prix
              }
              quantite
            }
          }
        }
      `
    });
  }


}
