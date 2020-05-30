import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-create-admin',
  templateUrl: './product-create-admin.component.html',
  styleUrls: ['./product-create-admin.component.scss']
})
export class ProductCreateAdminComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }
  productID:string;
  productName :string;
  unitPrice:number;
  minimumOrder:number;
  Availability:boolean;
  imgSrc:string;
  imagepreview:string;

  onAddClick(){
    this.productService.addProductToDatabase({
      productName:this.productName,
      unitPrice:this.unitPrice,
      minimumOrder:this.minimumOrder,
      availability:this.Availability,
      imgSrc :this.imgSrc
    }).subscribe((x)=>{
      console.log("success");
    });
  }

  onChangeAvailability(){
    
  }
}
