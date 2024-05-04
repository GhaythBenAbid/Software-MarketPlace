import { Component } from '@angular/core';
import { CommandeService } from 'src/app/Services/commande.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  user : any = JSON.parse(localStorage.getItem('user') as string);
  type : string = localStorage.getItem('type') as string;
  cartLength : number = 0;

  constructor(private commandeService : CommandeService) { }

  ngOnInit() {
    this.commandeService.commandeByClient(this.user.id).subscribe((data) => {
      let commandes = (data.data as any).commandeEnAttenteByClient;
      if(commandes.length != 0){
        const commandeId = commandes[0].id;
        this.commandeService.ligneCommandeByCommande(commandeId).subscribe((data) => {
          let ligneCommandes = (data.data as any).ligneCommandeByCommande;
          console.log(ligneCommandes);
          let total = 0;
          for (let i = 0; i < ligneCommandes.length; i++) {
            total += ligneCommandes[i].quantite;
          }
          localStorage.setItem('cartLength' , total.toString());
          this.cartLength = total;
        }); 
      }else{
        localStorage.setItem('cartLength' , '0');
        this.cartLength = 0;
      }
    });
  }

}
