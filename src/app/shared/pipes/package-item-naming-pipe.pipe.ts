import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../products.models';

@Pipe({
  name: 'packageItemNamingPipe'
})
export class PackageItemNamingPipePipe implements PipeTransform {
  items:Products[];
  constructor(private productService:ProductsService){
    this.items=productService.getProducts();
  }

  transform(value: string,){
    let x = this.items.find((a)=>a.productID===value);
    return x.productName
  }

}
