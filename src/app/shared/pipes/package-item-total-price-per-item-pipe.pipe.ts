import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Pipe({
  name: 'packageItemTotalPricePerItemPipe'
})
export class PackageItemTotalPricePerItemPipePipe implements PipeTransform {
  constructor(private product:ProductsService){}

  
  transform(quantity:number,productID){
    let totalAmountPerItem=0;
    totalAmountPerItem=(quantity/100)*this.product.getProduct(productID).unitPrice;
    return totalAmountPerItem;

  }

}
