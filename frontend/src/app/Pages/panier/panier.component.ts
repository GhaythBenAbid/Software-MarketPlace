import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { CommandeService } from 'src/app/Services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  user: any = JSON.parse(localStorage.getItem('user') as string);
  ligneCommandes: any = [];
  commandeId: any;

  @ViewChild('paypalButtons', { static: true }) paypalButtons!: ElementRef;


  constructor(private commandeService: CommandeService , private toast:NgToastService) { }

  ngOnInit() {
    window.paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',

      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: (this.calculateTotal() / 3).toString(), 
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          const data = {
            id : this.commandeId,
            status : "Complété"
          }
          this.commandeService.updateCommande(data).subscribe((data) => {
            this.toast.success({detail : "Commande complétée avec succès" , summary : "Succès"});
          });

          //after payment is done, refresh the page
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          
        });
      },
      onError: (err: any) => {
        console.log(err);
      }
    }).render(this.paypalButtons.nativeElement);



    this.commandeService.commandeByClient(this.user.id).subscribe((data) => {
      let commandes = (data.data as any).commandeEnAttenteByClient;
      if (commandes.length != 0) {
        this.commandeId = commandes[0].id;
        this.commandeService.ligneCommandeByCommande(this.commandeId).subscribe((data) => {
          this.ligneCommandes = (data.data as any).ligneCommandeByCommande;
          console.log(this.ligneCommandes);
        });
      }
    });

  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.ligneCommandes.length; i++) {
      total += this.ligneCommandes[i].quantite * this.ligneCommandes[i].produit.prix;
    }
    return total;
  }



}
