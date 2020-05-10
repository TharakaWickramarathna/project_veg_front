import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { UserPackDescriptionService } from 'src/app/shared/services/user-pack-description.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserPackService } from 'src/app/shared/services/user-pack.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';
import { UserPackageProductDescription } from 'src/app/shared/models/userPackageDescription.model';

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
  
////get contents those are passing with modal
  packageName:string;
  content:any;
  weight=1;
  userID="5eaf18c4d82e71543ce00229";


  
  totalAmount:number;
  specificProductList:UserPackageProductDescription[]=[];

  ngOnInit(): void {
  //find related package id
  // this.packageID=this.route.snapshot.params['id'];

  // //get all products for user to edit
  //       this.productService.fetchProductsFromHttp().subscribe((products)=>{
  //         this.specificProductList = products
  //       });
}

  onClose(event: any) {
    console.log(event);
  }

  onClickEdit(){

  }

  onAddToCartClick(){
    // this.cartService.addUserPackages(this.content.packageID,this.weight,this.totalAmount);
    // this.modalRef.hide();
  }

  onEditClick(){
    this.router.navigate(['userpacks',this.content.packageID,'editpack']);
    this.modalRef.hide();
  }



}
