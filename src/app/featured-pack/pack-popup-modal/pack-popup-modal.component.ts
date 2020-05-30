import { Packages } from './../../shared/packages.model';
// import { PackageDescriptionService } from './../../shared/services/package-description.service';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CartService } from 'src/app/shared/services/cart.service';
import { PackagesService } from 'src/app/shared/services/packages.service';
import { PackageDescription } from 'src/app/shared/packageDescription.models';

@Component({
  selector: 'app-pack-popup-modal',
  templateUrl: './pack-popup-modal.component.html',
  styleUrls: ['./pack-popup-modal.component.scss']
})
export class PackPopupModalComponent implements OnInit {


  productList:Packages[];
  packageName:string;

  constructor(public modalRef: MDBModalRef, 
              private cartService:CartService, 
              private packageService:PackagesService,
    // private packageDescriptionService:PackageDescriptionService
    ) {}

    heading: string;
    content: any;
    weight = 1;

  ngOnInit(): void {
    //get all product description
    this.packageService.getProductsFromHttp().subscribe((packages)=>{
      this.productList = packages;
    });
    //get package name related te the packageID
    //this.packageName=this.packageService.getPackage(this.content._id).name;
  }

  onClose(event: any) {
    console.log(event);
  }

  onClickAddToCart(){
    ///const price = this.packageService.getPackage(this.content._id).amount;
    this.cartService.addPackages(this.content._id,this.content.name,1,this.content.total);
    this.modalRef.hide();
    //console.log(this.content._id,this.content.name,this.content.total);
    
  
  }

}
