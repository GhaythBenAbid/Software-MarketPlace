import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  scrollToProducts(){
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({behavior: 'smooth'});
  }

}
