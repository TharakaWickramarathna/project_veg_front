import { PackagesService } from 'src/app/shared/services/packages.service';
import { ProductsService } from './../../../shared/services/products.service';
import { Products } from './../../../shared/products.models';
import { PackageDescriptionService } from './../../../shared/services/package-description.service';
import { Packages } from './../../../shared/packages.model';
import { PackageDescription } from './../../../shared/packageDescription.models';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featuredpack-edit-admin',
  templateUrl: './featuredpack-edit-admin.component.html',
  styleUrls: ['./featuredpack-edit-admin.component.scss']
})
export class FeaturedpackEditAdminComponent implements OnInit {

  constructor(private productService: ProductsService,
    private packageservice: PackagesService,
    private packageDesservice: PackageDescriptionService,
    private router: Router,
    private route: ActivatedRoute) { }

  items: Products[];
  addedItems = [];

  headElements = ['view', 'name', 'qtn.', 'price', 'availability', 'remove'];

  packageID: string;
  packageName: string;
  packageDiscount: number;

  selectedItemweight = 100;
  selectedID: string;
  selectedItemName: string;
  selectedItemImg: string;
  selectedItemUnitPrice: number;

  selectedItemTotalPrice: number = 0;
  packTotalPrice= 0;
  packDiscount = 0;

  ngOnInit(): void {

    // //get all product array from product service
    this.productService.fetchProductsFromHttp().subscribe((products)=>{
      this.items = products
    });
  
    // //get id of package from routing
     this.packageID = this.route.snapshot.params['id'];

     //get package details
     this.packageservice.getProductsFromHttp().subscribe((packages)=>{
      this.packageName = packages.find((pack)=>{return pack._id===this.packageID;}).name;
      this.packDiscount =packages.find((pack)=>{return pack._id===this.packageID;}).discount;
      let existingItems = packages.find((pack)=>{return pack._id===this.packageID;}).products;
      this.loadExistingItemToDisplayArray(existingItems);
      
    // //get total price of pack
      this.packTotalPrice = this.calculateTotalPrice(this.addedItems);

     });

    // //get package name 
    // this.packageName = this.packageservice.getPackage(this.packageID).packageName;

    // //get existing items to array to display 
    // this.loadExistingItemToDisplayArray();

  }

   selectOption(ID: string) {

  //   //recieve all the details related to selected item
      this.selectedID = ID
      this.selectedItemName = this.items.find((x)=>x._id===ID).productName;
      this.selectedItemImg = this.items.find((x)=>x._id===ID).imgSrc;
      this.selectedItemUnitPrice = this.items.find((x)=>x._id===ID).unitPrice;
      this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);

   }


  onPlusClick() {

  //   //increase weight
    this.selectedItemweight = this.selectedItemweight + 100;

  //   //update total weigt according to icrease weight
     this.selectedItemTotalPrice = this.selectedItemUnitPrice * (this.selectedItemweight / 100);
   }

   onMinusClick() {
     if (this.selectedItemweight > 100) {
    //decrease weight
    this.selectedItemweight = this.selectedItemweight - 100;
    //update total weigt according to icrease weight
      this.selectedItemTotalPrice = this.selectedItemUnitPrice * (this.selectedItemweight / 100);
    }
   }


   addToTable() {

     if (this.getItem(this.selectedID)) {
       //check wether selected item is in the list
       let index = this.addedItems.indexOf(this.getItem(this.selectedID));
      this.addedItems[index].weight = this.addedItems[index].weight + this.selectedItemweight;
      this.addedItems[index].totalPricePerItem = this.addedItems[index].totalPricePerItem + this.selectedItemTotalPrice;
      this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
    }
     else {
  //     //add item object to addeditems array
      this.addedItems.push({ productID: this.selectedID, productName: this.selectedItemName, imgSrc: this.selectedItemImg, weight: this.selectedItemweight, totalPricePerItem: this.selectedItemTotalPrice });
      
  //     //update total price 
      this.packTotalPrice = this.calculateTotalPrice(this.addedItems);

   }

   }

   onRemoveClick(productID) {
  //   //remove some ite from selected list array
     let selectedObject = this.addedItems.find((x) => x.productID === productID);
     let index = this.addedItems.indexOf(selectedObject);
     this.addedItems.splice(index, 1);

  //   //update total price after removing some item
     this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
   }

  // //calculate total pack price 
   calculateTotalPrice(addedItems) {
    let total = 0;
    let amount =0;
    let array = addedItems;
    for (let x of array) {
      amount = amount + x.totalPricePerItem;
    }
    total = amount - (amount*this.packDiscount)/100
    return total;
   }


  // //search packageID existense before adding
   getItem(productID) {
    return this.addedItems.find((x) => x.productID === productID);
   }

  // //on confirm click
   onConfirmClick() {
    let newItems = [];
    for(let x of this.addedItems){
      newItems.push({_id:x.productID,quantity:x.weight});
    }
  //call service method to send data to database
      this.packageservice.updatePackage(this.packageID,this.packageName,this.packDiscount,true,newItems).subscribe(()=>{
  //   //navigate to userpack page
    this.router.navigate(['admin', 'featuredpacksadmin',]);
  });
   }

   loadExistingItemToDisplayArray(items) {

    //push existing items to display array    
    for (let y of items) {
      this.addedItems.push({
        productID:y._id._id,
        productName:y._id.productName,
        imgSrc:y._id.imgSrc,
        weight:y.quantity,
        totalPricePerItem:(y._id.unitPrice)*(y.quantity),
      });
    }
   }

   onDeleteClick() {
    this.packageservice.removePackage(this.packageID).subscribe(()=>{
      this.router.navigate(['admin', 'featuredpacksadmin',]);
    });
  //   this.packageservice.removePackage(this.packageID);
  //   this.packageDesservice.removePackageDescription(this.packageID);
  //   this.router.navigate(['admin', 'featuredpacksadmin',]);
   }


}
