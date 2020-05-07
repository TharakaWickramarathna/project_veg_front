import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartQuantityAndWeightPipe'
})
export class CartQuantityAndWeightPipePipe implements PipeTransform {
  
  newValue:string;
  transform(value:number): unknown {
    if(value>100){
      if(value>=1000){
        this.newValue=(value/1000)+"Kg";
      }
      else{
        this.newValue = value+"g";
      }
      
    }
    else{
      return value;
    }
    return this.newValue;
  }

}
