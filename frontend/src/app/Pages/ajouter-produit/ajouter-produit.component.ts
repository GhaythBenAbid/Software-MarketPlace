import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CategorieService } from 'src/app/Services/categorie.service';
import { CloudinaryService } from 'src/app/Services/cloudinary.service';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {

  user: any = JSON.parse(localStorage.getItem('user') as string);
  categories: any = [];
  image: any = null;
  is_uploading: boolean = false;

  constructor(private produitService: ProduitService, private categorieService: CategorieService, private toast: NgToastService, private cloudinaryService: CloudinaryService) { }


  ngOnInit() {
    console.log(this.user);

    this.categorieService.getCategories().subscribe((data) => {
      this.categories = (data.data as any).categories;
    });
  }

  onFileSelected(event: any) {
    this.is_uploading = true;
    this.cloudinaryService.upload(event.target.files[0]).subscribe((data) => {
      this.image = (data as any).secure_url;
      this.is_uploading = false;
    }
    );
  }


  ajouter(form: NgForm) {
    const data = {
      ...form,
      image: this.image,
      vendeurId: this.user.id
    }



    this.produitService.createProduit(data).subscribe((data) => {
      this.toast.success({detail : 'Success' , summary : 'Produit ajouté avec succès'});
    }, (error) => {
      this.toast.error({detail : 'Error' , summary : 'Erreur lors de l\'ajout du produit'});
    });
  }

}
