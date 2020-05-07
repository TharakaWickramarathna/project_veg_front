import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { Products } from '../products.models';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,
              private productService:ProductsService) { }

  fetchProducts(){
    this.http.get<Products[]>('https://project-veg.firebaseio.com/products.json').subscribe(
      (products:Products[])=>{
        //console.log(products);
        this.productService.setProducts(products);
      }
    )
  }

  storeProducts(){
    const product = this.productService.getProducts();
    this.http.put('https://project-veg.firebaseio.com/products.json',product).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }
}
