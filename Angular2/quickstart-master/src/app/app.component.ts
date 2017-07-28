import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<product-form (add_details_array) = "addAdvertise($event)"> </product-form>
              <table-comp [add_array_child]="advertises"></table-comp>`,
})
export class AppComponent  { 
//  name = 'Angular';
//console.log("sdfgetg");
public advertises:Array<any> = [];

    addAdvertise(newAdvertise: any) {
      this.advertises.push(newAdvertise);
      console.log("newAdvertise", newAdvertise);
    }

//console.log(add_array);

 }
