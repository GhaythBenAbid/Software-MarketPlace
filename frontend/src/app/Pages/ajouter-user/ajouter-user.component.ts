import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { CloudinaryService } from 'src/app/Services/cloudinary.service';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent {

  user: any = JSON.parse(localStorage.getItem('user') as string);
  categories: any = [];
  image: any = null;
  is_uploading: boolean = false;

  constructor(private cloudinaryService: CloudinaryService, private authsService: AuthService, private toast: NgToastService) { }



  onFileSelected(event: any) {
    this.is_uploading = true;
    this.cloudinaryService.upload(event.target.files[0]).subscribe((data) => {
      this.image = (data as any).secure_url;
      this.is_uploading = false;
    }
    );
  }



  ajouter(form: any) {
    const data = {
      ...form,
      photo: this.image,
    }

    this.authsService.register(data).subscribe((data) => {
      this.toast.success({ detail: 'Success', summary: 'Utilisateur ajouté avec succès' });
    }, (error) => {
      this.toast.error({ detail: 'Error', summary: 'Erreur lors de l\'ajout de l\'utilisateur' });
    }
    );



  }

}
