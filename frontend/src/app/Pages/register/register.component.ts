import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService , private toaster : NgToastService , private router : Router) { }


  register(form: NgForm) {
    this.authService.register(form).subscribe((data) => {
      this.toaster.success({detail : 'Success' , summary : 'User registered successfully'});
      //after 2 seconds navigate to login page
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

    }, (error) => {
      this.toaster.error({detail : 'Error' , summary : 'User registration failed'});
    });
  }

}
