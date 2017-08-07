import { Component,EventEmitter } from '@angular/core';
import {AdService} from '../../Services/AdvertisementService';

@Component({
  selector: 'product-form',
  templateUrl: `./product-form.html`,
  //outputs:['add_details_array'],
})
export class ProductComponent  { 
     title ='Ads'; 
     name = "Ammar";
     list_categories:Array<string> = ['Furniture','Mobile','Hardware'];
     //add_post_details:Array<any> = [];

    //public add_details_array = new EventEmitter<any>();
     
     constructor(private myAd:AdService)
     {
      //console.log("hola",myAd.getAllAds());
     }

     submit_add(nameref:string,descriptionref:string,categoryref:string)
     {  
       var obj = {name:nameref,desc:descriptionref,cat:categoryref};
       //this.add_details_array.emit(obj);

      //console.log(this.add_post_details);
        //let myAd : AdService
        this.myAd.setAd(obj);
        console.log(this.myAd.getAllAds());
     }
    
      
     
}