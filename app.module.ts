import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { ProductListComponent } from '../app/products/product-list.component';

// importing custom pipe class 
import { ProductFilterPipe } from '../app/products/product-filter.pipe';

// start custom component or nested component
import { StarComponent } from '../app/shared/star.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
