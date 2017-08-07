import { Component } from '@angular/core';
import {AdService} from '../../Services/AdvertisementService';

@Component({
  selector: 'home-component',
  template: `<product-form></product-form><table-comp></table-comp>`,/*`<model-driven-form></model-driven-form><template-driven-form></template-driven-form><product-form (add_details_array) = "addAdvertise($event)"> </product-form>
              <table-comp [add_array_child]="advertises" (update_add_array)="delAdvertise($event)" ></table-comp>`,*/
  
})
export class homeComponent  { 

 }
