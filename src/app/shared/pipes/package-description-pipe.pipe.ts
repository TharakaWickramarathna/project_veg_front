import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packageDescriptionPipe'
})
export class PackageDescriptionPipePipe implements PipeTransform {

  transform(value: any,packageID:string){
    if(value.length===0){
      return value;
    }
    const resultArray=[];
    for(const item of value){
      if(item.packageID===packageID){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
