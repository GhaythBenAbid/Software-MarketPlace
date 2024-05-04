import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { ErrorFormat } from 'src/app/Utils/ErrorFormat';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  type : string = '';


  //get id from get route
  urlparams : any = new URLSearchParams(window.location.search);
  id = this.urlparams.get('id');


  constructor(private authService: AuthService , private toaster : NgToastService , private router : Router) { }


  login(form: NgForm) {
    this.authService.login(form).subscribe((data: any) => {
      this.toaster.success({detail : 'Success' , summary : 'User logged in successfully'});
      this.type = (data.data as any).login.type;
      localStorage.setItem('token', (data.data as any).login.token);
      localStorage.setItem('type', this.type);
      localStorage.setItem('user' , JSON.stringify((data.data as any).login));

      if(this.type == 'client') {
        if(this.id) {
          this.router.navigate(['/produit/' + this.id]);
          return;
        }
        this.router.navigate(['store']);
        return;
      }
      this.router.navigate([this.type]);


    }, (error) => {
      this.toaster.error({detail : 'Error' , summary : ErrorFormat(error)});
    });
  }
}
