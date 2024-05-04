import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from 'src/app/Services/commande.service';
import { EvaluationService } from 'src/app/Services/evaluation.service';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent {

  produit : any = {};
  evalutations : any = [];
  quantite : number = 1;
  overallRating : number = 0;
  type : string = localStorage.getItem('type') as string;
  user : any = JSON.parse(localStorage.getItem('user') as string);
  id = this.route.snapshot.params['id'];
  isAlreadyInCart : boolean = false;

  constructor(private route : ActivatedRoute , private produitService : ProduitService , private evalutationService : EvaluationService , private commandesService : CommandeService , private toast : NgToastService) {
  }

  ngOnInit() {
    //check if product exists in the ligne commande of recent commande
    this.commandesService.commandeByClient(this.user.id).subscribe((data) => {
      let commandes = (data.data as any).commandeEnAttenteByClient;
      if(commandes.length != 0){
        const commandeId = commandes[0].id;
        this.commandesService.ligneCommandeByCommande(commandeId).subscribe((data) => {
          let ligneCommandes = (data.data as any).ligneCommandeByCommande;
          for (let i = 0; i < ligneCommandes.length; i++) {
            if(ligneCommandes[i].produit.id == this.id){
              this.isAlreadyInCart = true;
              break;
            }
          }
        });
      }
    });




    this.produitService.getProduitById(this.id).subscribe((data) => {
      this.produit = (data.data as any).produit;
    });
    this.evalutationService.getEvaluationsByProduitId(this.id).subscribe((data) => {
      this.evalutations = (data.data as any).getEvaluationsByProduitId;
      for (let i = 0; i < this.evalutations.length; i++) {
        this.overallRating += parseFloat(this.evalutations[i].note);
      }

    });
  }

  convertFloatToInt(value : number){
    return Math.floor(value);
  }

  createArrayFromNumber(length : number){
    return new Array(length).fill(0).map((x,i) => i);
  }
  
  addToCart(){
    this.commandesService.commandeByClient(this.user.id).subscribe((data) => {
      let commandes = (data.data as any).commandeEnAttenteByClient;
      if(commandes.length == 0){
        this.commandesService.createCommande(this.user.id).subscribe((data) => {
          let commande = (data.data as any).createCommande;
          localStorage.setItem('commandeId' , commande.id);
          const content = {
            commandeId : commande.id,
            produitId : this.produit.id,
            quantite : this.quantite
          };
          this.commandesService.createLigneCommande(content).subscribe((data) => {
            //update cart length
            let cartLength = localStorage.getItem('cartLength') ? parseInt(localStorage.getItem('cartLength') as string) : 0;
            cartLength += this.quantite;
            localStorage.setItem('cartLength' , cartLength.toString());
            this.toast.success({detail : 'Produit ajouté au panier' , summary : 'Succès'});
          });
        });
      }else{
        localStorage.setItem('commandeId' , commandes[0].id);
        const data = {
          commandeId : localStorage.getItem('commandeId'),
          produitId : this.produit.id,
          quantite : this.quantite
        };
        this.commandesService.createLigneCommande(data).subscribe((data) => {
          //update cart length
          let cartLength = localStorage.getItem('cartLength') ? parseInt(localStorage.getItem('cartLength') as string) : 0;
          cartLength += this.quantite;
          localStorage.setItem('cartLength' , cartLength.toString());
          this.toast.success({detail : 'Produit ajouté au panier' , summary : 'Succès'});
        }
        );
      }
    });
    setTimeout(() => {
      window.location.reload();
    } , 2000);
  }

  

}
