import { Component } from '@angular/core';
import {AdService} from './Services/AdvertisementService';

@Component({
  selector: 'my-app',
  template: `<product-form></product-form><table-comp></table-comp>`,/*`<model-driven-form></model-driven-form><template-driven-form></template-driven-form><product-form (add_details_array) = "addAdvertise($event)"> </product-form>
              <table-comp [add_array_child]="advertises" (update_add_array)="delAdvertise($event)" ></table-comp>`,*/
  providers:[AdService],
})
export class AppComponent  { 
//  name = 'Angular';
//console.log("sdfgetg");


constructor(private myad : AdService)
{
  //console.log(myad.getAllAds());
}




/*public advertises:Array<any> = [];

    addAdvertise(newAdvertise: any) {
      this.advertises.push(newAdvertise);
      console.log("newAdvertise", newAdvertise);
    }

    delAdvertise(del_add:any)
    {
        console.log("in parent",this.advertises);
     // this.advertises.splice(del_add,1);
      //console.log("again",this.advertises);
    }

//console.log(add_array);
*/
 }
