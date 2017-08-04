import { Component,OnInit } from '@angular/core';
import {AdService} from '../../Services/AdvertisementService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-component',
  templateUrl: `./edit-component.html`,/*`<model-driven-form></model-driven-form><template-driven-form></template-driven-form><product-form (add_details_array) = "addAdvertise($event)"> </product-form>
              <table-comp [add_array_child]="advertises" (update_add_array)="delAdvertise($event)" ></table-comp>`,*/
  
})
export class editComponent implements OnInit { 

    name:any;
    desc:any;
    cat:any;
    obj:Object;
    constructor(private activeRoute: ActivatedRoute,private myService : AdService)
    {
        
    }
    
    ngOnInit()
    {
            this.name = this.activeRoute.snapshot.params['name'];
            this.obj = this.myService.getAd(this.name);
            console.log("ooo",this.obj);
            this.desc = this.obj.desc;
            this.cat = this.obj.cat;
    }

    edit_ad(new_name:any,new_cat:any,new_desc:any)
    {
            this.myService.editAdvertise(new_name,new_cat,new_desc);
    }
    
    cancel_ad()
    {

    }

 }
