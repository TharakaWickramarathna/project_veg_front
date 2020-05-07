import { Component, OnInit,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserPackService } from 'src/app/shared/services/user-pack.service';
import { UserPackDescriptionService } from 'src/app/shared/services/user-pack-description.service';
import { Products } from 'src/app/shared/products.models';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';


  @Component({
    selector: 'app-user-pack-edit',
    templateUrl: './user-pack-edit.component.html',
    styleUrls: ['./user-pack-edit.component.scss']
  })
  export class UserPackEditComponent implements OnInit {

    constructor(private route:ActivatedRoute,
                private router:Router,
                private productService:ProductsService,
                private userPackageService:UserPackService,
                private userPackageDescriptionService:UserPackDescriptionService,
                public mdRef:MDBModalService ) { }
  
                noClick = new EventEmitter<any>()
  //define selecte item variables
  packageID:string;
  packageName:string;

  selectedItemweight = 200;
  selectedID:string;
  selectedItemName:string;
  selectedItemImg:string;
  selectedItemUnitPrice:number;
  selectedItemTotalPrice:number = 0;
  packTotalPrice=0;

  items:Products[];
  addedItems=[];
  headElements =   ['view' ,'name', 'qtn.', 'price', 'remove'];

  ngOnInit(): void {
//get all product array from product service
    this.items = this.productService.getProducts();

//get id of package from routing
    this.packageID=this.route.snapshot.params['id'];
    console.log(this.packageID);
//get package name 
    this.packageName=this.userPackageService.getPackage(this.packageID).packageName;
//get existing items to array to display 
    this.loadExistingItemToDisplayArray();
//get total price of pack
    this.packTotalPrice=this.calculateTotalPrice(this.addedItems);

  }



  selectOption(ID: string) {

//recieve all the details related to selected item
  //console.log(ID);
  this.selectedID = ID
  this.selectedItemName = this.items.find((x)=>x.productID===ID).productName;
  this.selectedItemImg = this.items.find((x)=>x.productID===ID).imgSrc;
  this.selectedItemUnitPrice = this.items.find((x)=>x.productID===ID).unitPrice;
  this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);

  }


  onPlusClick(){
//increase weight
  this.selectedItemweight=this.selectedItemweight+100;
//update total weigt according to icrease weight
  this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);
  }

  onMinusClick(){

  if(this.selectedItemweight>200){
//decrease weight
  this.selectedItemweight=this.selectedItemweight-100;
//update total weigt according to icrease weight
  this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);
  }
  }



  addToTable(){

  if(this.getItem(this.selectedID)){
//check wether selected item is in the list
    let index = this.addedItems.indexOf(this.getItem(this.selectedID));
    this.addedItems[index].weight=this.addedItems[index].weight+this.selectedItemweight;
    this.addedItems[index].totalPricePerItem=this.addedItems[index].totalPricePerItem+this.selectedItemTotalPrice;
    console.log(index);
    this.packTotalPrice = this.calculateTotalPrice(this.addedItems);

  }
  else{
//add item object to addeditems array
  this.addedItems.push({productID:this.selectedID,productName:this.selectedItemName,imgSrc:this.selectedItemImg,weight:this.selectedItemweight,totalPricePerItem:this.selectedItemTotalPrice});
//update total price 
  this.packTotalPrice = this.calculateTotalPrice(this.addedItems);

  }




  }

  onRemoveClick(productID){
//remove some ite from selected list array
  let selectedObject = this.addedItems.find((x)=>x.productID===productID);
  let index = this.addedItems.indexOf(selectedObject);
  this.addedItems.splice(index,1);
//update total price after removing some item
  this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
  }


//calculate total pack price 
  calculateTotalPrice(addedItems){
  let total=0;
  let array = addedItems;
  for(let x of array){
  total = total+x.totalPricePerItem;
  }
  return total;
  }
//search packageID existense before adding
  getItem(productID){
  return this.addedItems.find((x)=>x.productID===productID);
  }

//on confirm click
  onConfirmClick(){
    this.userPackageDescriptionService.updateUserPackageDescription(this.packageID,this.addedItems);
//update name on
    this.userPackageService.updatePackage(this.packageID,this.packageName);
//navigate to userpack page
    this.router.navigate(['userpacks','userpacklist']);
  }



  loadExistingItemToDisplayArray(){
//get package description related to package
    let loadedArray=this.userPackageDescriptionService.getPackagesDescription(this.packageID);

//push existing items to display array    
    for(let y of loadedArray){
      this.addedItems.push({
        productID:y.productID,
        productName:this.items.find((x)=>x.productID===y.productID).productName,
        imgSrc:this.items.find((x)=>x.productID===y.productID).imgSrc,
        weight:y.quantity,
        totalPricePerItem:this.items.find((x)=>x.productID===y.productID).unitPrice*(y.quantity/100),
      });
    }
  }


  onDeleteClick(){
    this.userPackageService.removePackage(this.packageID);
    this.userPackageDescriptionService.removePackageDescription(this.packageID);


    // console.log(this.route.snapshot.params['id']);
    this.router.navigate(['userpacks','userpacklist']);
  }

  }
