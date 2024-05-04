import { Component } from '@angular/core';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.css']
})
export class VendeurComponent {

  user : any = JSON.parse(localStorage.getItem('user') as string);

  produits : any = [];

  constructor(private produitService : ProduitService) { }

  ngOnInit() {
    this.produitService.getProduitsByVendeurId(this.user.id).subscribe((data) => {
      this.produits = (data.data as any).produitsByVendeurId;
    });
  }


}
