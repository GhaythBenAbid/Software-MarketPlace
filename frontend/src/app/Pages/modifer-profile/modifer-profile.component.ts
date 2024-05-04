import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { CloudinaryService } from 'src/app/Services/cloudinary.service';

@Component({
  selector: 'app-modifer-profile',
  templateUrl: './modifer-profile.component.html',
  styleUrls: ['./modifer-profile.component.css']
})
export class ModiferProfileComponent {

  user: any = JSON.parse(localStorage.getItem('user') as string);
  modiferProfileForm: FormGroup | undefined;
  image: any = null;
  is_uploading: boolean = false;

  constructor(private authService: AuthService, private cloudinaryService: CloudinaryService , private toast : NgToastService) { }

  onFileSelected(event: any) {
    this.is_uploading = true;
    this.cloudinaryService.upload(event.target.files[0]).subscribe((data) => {
      this.image = (data as any).secure_url;
      this.is_uploading = false;
    }
    );
  }

  modiferProfile(form: NgForm) {
    const data = {
      ...form,
      photo: this.image ? this.image : this.user.photo,
      id: this.user.id
    }

    this.authService.update('vendeur', data).subscribe((data) => {
      localStorage.setItem('user', JSON.stringify((data.data as any).updateVendeur));
      this.toast.success({detail : 'Success' , summary : 'Profile modifié avec succès'});
      // window.location.reload();
    }, (error) => {
      this.toast.error({detail : 'Error' , summary : 'Erreur lors de la modification du profile'});
    });

  }

}
