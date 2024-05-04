import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { config } from '../Utils/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private apollo: Apollo) { }

  login(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          login(loginInput: { email: "${data.email}", password: "${data.password}" }) {
            id
            token
            type
            nom
            prenom
            email
            motdepasse
            adresse
          }
        }
      `,
    });
  }

  register(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          register(
            type: "${data.type}"
            registerInput: {
              nom: "${data.nom}"
              prenom: "${data.prenom}"
              email: "${data.email}"
              motdepasse: "${data.motdepasse}"
              adresse: "${data.adresse}"
            }
          ) {
            nom
            prenom
            email
            adresse
            motdepasse
          }
        }
      `,
    });
  }



  updateVendeur(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          updateVendeur(updateVendeurInput: {
            id: ${data.id},
            nom: "${data.nom}"
            prenom: "${data.prenom}"
            adresse: "${data.adresse}"
            telephone: "${data.telephone}"
            photo: "${data.photo}"
          }) {
            id
            nom
            prenom
            email
            telephone
            adresse
            photo
          }
        }
      `,
    });
  }

  updateClient(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          updateClient(updateClientInput: {
            id: ${data.id},
            nom: "${data.nom}"
            prenom: "${data.prenom}"
            adresse: "${data.adresse}"
            telephone: "${data.telephone}"
            photo: "${data.photo}"
          }) {
            id
            nom
            prenom
            email
            telephone
            adresse
            photo
          }
        }
      `,
    });
  }

  updateAdmin(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          updateAdmin(updateAdminInput: {
            id: ${data.id},
            nom: "${data.nom}"
            prenom: "${data.prenom}"
            adresse: "${data.adresse}"
            telephone: "${data.telephone}"
            photo: "${data.photo}"
          }) {
            id
            nom
            prenom
            email
            adresse
            telephone
            photo
          }
        }
      `,
    });
  }


  update(type: any, data: any) {
    if (type == "vendeur") {
      return this.updateVendeur(data);
    } else if (type == "admin") {
      return this.updateAdmin(data);
    } else
      return this.updateClient(data);
  }

  // query{
  //   client(id : 8){
  //     id
  //     nom
  //     prenom
  //     email
  //     motdepasse
  //     adresse
  //     telephone
  //     photo
  //   }
  // }
  getClient(id: any) {
    return this.apollo.query({
      query: gql`
        query{
          client(id : ${id}){
            id
            nom
            prenom
            email
            motdepasse
            adresse
            telephone
            photo
          }
        }
      `
    });
  }


}



