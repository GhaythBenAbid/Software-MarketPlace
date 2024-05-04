import { Component } from '@angular/core';
import { CommandeService } from 'src/app/Services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {

  user : any = JSON.parse(localStorage.getItem('user') as string);
  commandes : any = [];

  constructor(private commandeService : CommandeService) { }

  ngOnInit() {
    this.commandeService.getAllCommandesByClient(this.user.id).subscribe((data) => {
      this.commandes = (data.data as any).commandeByClient;
    });
  }

}
