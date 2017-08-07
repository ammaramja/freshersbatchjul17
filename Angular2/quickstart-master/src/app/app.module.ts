import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {homeComponent} from './components/home-component/home-component';
import {editComponent} from './components/edit-component/edit-component';

import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {ProductComponent} from './components/product-components/product-form.component';
import {TemplateComponent} from './validations/template/template';
import {TableComponent} from './components/table-components/table';
import {searchPipe} from './pipes/search/search_pipe';

import {MdfComponent} from './validations/mdf/mdf';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,
  RouterModule.forRoot([
    {
      path:'',component:homeComponent
    },
    {
      path:'edit/:name',component:editComponent
    }

  ]) ],
  declarations: [ AppComponent,ProductComponent,TableComponent,searchPipe,TemplateComponent,MdfComponent,homeComponent,editComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
