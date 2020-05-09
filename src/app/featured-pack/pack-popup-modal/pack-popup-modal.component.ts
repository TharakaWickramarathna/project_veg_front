// import { PackageDescriptionService } from './../../shared/services/package-description.service';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CartService } from 'src/app/shared/services/cart.service';
import { PackagesService } from 'src/app/shared/services/packages.service';
import { PackageDescriptionService } from 'src/app/shared/services/package-description.service';
import { PackageDescription } from 'src/app/shared/packageDescription.models';

@Component({
  selector: 'app-pack-popup-modal',
  templateUrl: './pack-popup-modal.component.html',
  styleUrls: ['./pack-popup-modal.component.scss']
})
export class PackPopupModalComponent implements OnInit {


  productList:PackageDescription[];
  packageName:string;

  constructor(public modalRef: MDBModalRef, 
              private cartService:CartService, 
              private packageService:PackagesService,
              private packageDesService:PackageDescriptionService
    // private packageDescriptionService:PackageDescriptionService
    ) {}

    heading: string;
    content: any;
    weight = 1;

  ngOnInit(): void {
    //get all product description
    this.productList=this.packageDesService.getPackagesDescriptions();
    //get package name related te the packageID
    this.packageName=this.packageService.getPackage(this.content.packageID).name;
  }

  onClose(event: any) {
    console.log(event);
  }

  onClickAddToCart(){
    const price = this.packageService.getPackage(this.content.packageID).amount;
    this.cartService.addPackages(this.content.packageID,this.weight,price);
    this.modalRef.hide();
    
    
    
  }

}
