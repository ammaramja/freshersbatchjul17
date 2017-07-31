import { Component,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'model-driven-form',
  templateUrl: `./mdf.html`,
  //styles: [`input.ng-invalid {border-left: 5px solid red} input.ng-valid {border-left: 5px solid green}`],
 
})
export class MdfComponent  { 
     title ='Advertisement!'; 
    
     list_categories:Array<string> = ['Furniture','Mobile','Hardware'];

  AdForm : FormGroup;
  constructor(private myfb:FormBuilder)
  {
    this.AdForm = this.myfb.group({
        name : [null,[Validators.required,Validators.minLength(3)]],
        description : [null,[Validators.required,Validators.minLength(3)]],
    })
  }

    /* AdForm = new FormGroup({

        name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
        description: new FormControl(null,[Validators.required,Validators.minLength(3)])

     });
*/
     submit_add(nameref:string,descriptionref:string,categoryref:string)
     {  
  
     }
     
}