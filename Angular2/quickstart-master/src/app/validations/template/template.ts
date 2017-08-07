import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: `./template.html`,
  //outputs:['add_details_array'],
})
export class TemplateComponent  { 
     title ='Advertisement'; 
     //name = "Ammar!";
     list_categories:Array<string> = ['Furniture','Mobile','Hardware'];
     //add_post_details:Array<any> = [];

    //public add_details_array = new EventEmitter<any>();
     
     submit_add(nameref:string,descriptionref:string,categoryref:string)
     {  
     //  let obj = {name:nameref,desc:descriptionref,cat:categoryref};
      // this.add_details_array.emit(obj);

      //console.log(this.add_post_details);
     }
     
}