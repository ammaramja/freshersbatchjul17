import { Component } from '@angular/core';

@Component({
  selector: 'table-comp',
  templateUrl: `./table.html`,
  inputs:['add_array_child'],
})
export class TableComponent  { 
    public add_array_child:Array<any>;

    deleteAd(name_to_be_deleted:String)
    {
        let index = this.add_array_child.indexOf(name_to_be_deleted);
        this.add_array_child.splice(index,1);        
    }



}