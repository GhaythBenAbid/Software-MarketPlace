import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { EvaluationService } from 'src/app/Services/evaluation.service';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  produits: any = [];
  message: string = '';

  scrollToProducts() {
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private produitService: ProduitService, private evaluationService: EvaluationService, private toast: NgToastService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe((data) => {
      this.produits = (data.data as any).produits;
    });
  }

  sendContactMessage() {
    const data = {
      clientId: 1,
      message: this.message
    };

    this.evaluationService.createReclamation(data).subscribe((data) => {
      this.message = '';
      this.toast.success({ detail: 'Message envoyé avec succès', summary: 'Succès' });
    });
  }


}
