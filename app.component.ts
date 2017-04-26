import { Component } from '@angular/core';
import { ProductListComponent } from '../app/products/product-list.component';

@Component({
  selector: 'muss-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey Angular';
  test = "Test text from parent";
  name: string;

  pageTitle: string = 'Muss Product Management';

  myName(name){
    console.log(name);
  }

}

