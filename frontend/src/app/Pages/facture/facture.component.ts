import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CommandeService } from 'src/app/Services/commande.service';
import { FactureService } from 'src/app/Services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  commandeId : any;
  commande : any;
  currentDate = new Date();
  facture : any;
  //pdfTable
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;

  constructor(private route : ActivatedRoute , private commandeService : CommandeService , private factureService : FactureService){}

  ngOnInit() {
    this.commandeId = this.route.snapshot.params['id'];
    this.commandeService.getCommandeById(this.commandeId).subscribe((data) => {
      this.commande = (data.data as any).commande;
    });


  }

  downloadAsPDF() {
    this.factureService.createFacture({clientId : this.commande.client.id , commandeId : this.commande.id}).subscribe((data) => {
      this.facture = data;      
    });






    //pdf as a4 size image
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
    html2canvas(pdfTable).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      doc.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('facture.pdf');
    });
  }


  calculateTotal() {
    let total = 0;
    this.commande.ligneCommandes.forEach((ligneCommande : any) => {
      total += ligneCommande.produit.prix * ligneCommande.quantite;
    });
    return total;
  }
  

}
