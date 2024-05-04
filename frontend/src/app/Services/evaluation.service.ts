import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private apollo : Apollo) { }

  // query{
  //   getEvaluationsByProduitId(produitId : 1){
  //     id
  //     note
  //     commentaire
  //     client{
  //       nom
  //       prenom
  //       email
  //     }
  //   }
  // }
  getEvaluationsByProduitId(produitId : any){
    return this.apollo.query({
      query: gql`
        query{
          getEvaluationsByProduitId(produitId : ${produitId}){
            id
            note
            commentaire
            client{
              nom
              prenom
              email
              photo
            }
          }
        }
      `
    });
  }

  createEvaluation(data : any){
    return this.apollo.mutate({
      mutation: gql`
        mutation{
          createEvaluation(createEvaluationInput : {
            note : ${data.note}
            commentaire : "${data.commentaire}"
            clientId : ${data.clientId}
            produitId : ${data.produitId}
          }){
            id
            note
            commentaire
          }
        }
      `
    });
  }

  // mutation{
  //   createReclamation(createReclamationInput:{
  //     title : "Reclamation de client x",
  //     description : "ERROROOROODKODKOQKOSKOKSOSKO",
  //     clientId : 8
  //   }){
  //     id
  //     title
  //     description
  //   }
  // }

  createReclamation(data : any){
    return this.apollo.mutate({
      mutation: gql`
        mutation{
          createReclamation(createReclamationInput:{
            title : "Reclamation de client ${data.clientId}"
            description : "${data.description}"
            clientId : ${data.clientId}
          }){
            id
            title
            description
          }
        }
      `
    });
  }


}
