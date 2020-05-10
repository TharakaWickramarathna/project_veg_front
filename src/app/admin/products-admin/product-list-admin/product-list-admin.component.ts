import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Products } from 'src/app/shared/products.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {
  
  products:Products[];
  constructor(private productsService:ProductsService,
              private router:Router) { }

  ngOnInit(): void {
    this.productsService.fetchProductsFromHttp().subscribe((products)=>{
      this.products=products;
    });
  }

  onClickItem(productID){
    this.router.navigate(['admin','productsadmin',productID,'editproduct']);
  }

}
