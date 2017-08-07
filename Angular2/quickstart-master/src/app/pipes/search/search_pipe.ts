import {Pipe,PipeTransform}  from '@angular/core';

@Pipe({
name:'search'
})

export class searchPipe implements PipeTransform{

   transform(value: any[], ...args: any[])
   {
       let new_array:any[]=[];

       if(args[0] === undefined || args[0]==='')
       {
           return value;
       }

       value.forEach((f)=>
       {
           if(f.name.includes(args[0]))
           {
            new_array.push(f);
           }
       })

       return new_array;

   }
    
}


