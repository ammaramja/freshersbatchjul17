import { Component,EventEmitter } from '@angular/core';
import {AdService} from '../../Services/AdvertisementService';

@Component({
  selector: 'table-comp',
  templateUrl: `./table.html`,
  inputs:['add_array_child'],
  outputs:['update_add_array'],
})
export class TableComponent  { 
    public add_array_child:Array<any>;
    //update_add_array = new EventEmitter<any>();

    constructor(private myAd : AdService)
    {
            this.add_array_child = myAd.getAllAds();
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