import { Component,EventEmitter } from '@angular/core';
import {AdService} from '../../Services/AdvertisementService';
import { Router } from '@angular/router';

@Component({
  selector: 'table-comp',
  templateUrl: `./table.html`,
  inputs:['add_array_child'],
  outputs:['update_add_array'],
})
export class TableComponent  { 
    
    public add_array_child:Array<any>;

    constructor(private myAd : AdService,private myRoute: Router)
    {
            this.add_array_child = myAd.getAllAds();
    }

    editAd(name_to_be_edited:String)
    {
            this.myRoute.navigate(['/edit',name_to_be_edited]);
    }


    deleteAd(name_to_be_deleted:String)
    {
        /*let index = 0; //= this.add_array_child.indexOf(name_to_be_deleted);
        console.log(this.add_array_child);
        this.add_array_child.forEach((f)=>
        {
            if (name_to_be_deleted == f.name){
                console.log(f.name,index);
                
            }
            else
            {
                index += 1;
            }
        })
        //console.log("in child",index);   
        this.add_array_child.splice(index,1);   
        this.update_add_array.emit(index);  
        */
        this.myAd.deleteAd(name_to_be_deleted);
        
    }



}