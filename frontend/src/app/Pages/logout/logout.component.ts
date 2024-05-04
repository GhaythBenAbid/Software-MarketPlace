import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private route : Router) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    this.route.navigate(['/login']);

  }

}
