import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombresolo'
})
export class NombreSoloPipe implements PipeTransform {
i:number;
element:Array<string>;
  transform(value: string, args?: any): any { 
this.element=value.split(' ')

  for (this.i= 0; this.i < this.element.length; this.i++) { 
         if(this.element[this.i]=="Mrs."){

      }else{
        return this.element[this.i];         
        }      
      } 
}
    
}

