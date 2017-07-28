import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductComponent} from './components/product-components/product-form.component';
import {TableComponent} from './components/table-components/table';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ProductComponent,TableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
