import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { UserPackDescription } from 'src/app/shared/userPackDescription.model';
import { UserPackDescriptionService } from 'src/app/shared/services/user-pack-description.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserPackService } from 'src/app/shared/services/user-pack.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pop-up-model',
  templateUrl: './view-pop-up-model.component.html',
  styleUrls: ['./view-pop-up-model.component.scss']
})
export class ViewPopUpModelComponent implements OnInit {

  constructor(public modalRef:MDBModalRef,
              private userPackService:UserPackService,
              private userPackDesService:UserPackDescriptionService,
              private productService:ProductsService,
              private cartService:CartService,
              private router:Router) { }
  
//get contents those are passing with modal
  packageName:string;
  content:any;
  weight=1;


  
  totalAmount:number;
  specificProductList:UserPackDescription[];

  ngOnInit(): void {
  //filter related package description list
    this.specificProductList = this.userPackDesService.getPackagesDescription(this.content.packageID);
  //get package name
    this.packageName = this.userPackService.getPackage(this.content.packageID).packageName;

  //calculate total amount of pack
    let x = 0;
    for(const i of this.specificProductList){
      let unitPrice=this.productService.getProduct(i.productID).unitPrice;
      let quantity=i.quantity;
      x=x+unitPrice*(quantity/100);
    }
    this.totalAmount=x;
}

  onClose(event: any) {
    console.log(event);
  }

  onClickEdit(){

  }

  onAddToCartClick(){
    this.cartService.addUserPackages(this.content.packageID,this.weight,this.totalAmount);
    this.modalRef.hide();
  }

  onEditClick(){
    this.router.navigate(['userpacks',this.content.packageID,'editpack']);
    this.modalRef.hide();
  }



}
