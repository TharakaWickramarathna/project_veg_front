import { Component, OnInit,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserPackService } from 'src/app/shared/services/user-pack.service';
import { UserPackDescriptionService } from 'src/app/shared/services/user-pack-description.service';
import { Products } from 'src/app/shared/products.models';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { UserPackages } from 'src/app/shared/models/userPackage.model';


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
                public mdRef:MDBModalService ) { 
                }

     ngOnInit(): void {

//find related package id
      this.packageID=this.route.snapshot.params['id'];

//get all products for user to edit
      this.productService.fetchProductsFromHttp().subscribe((products)=>{
        this.items = products
      });

//fetch all the products that are in the pack  
        this.userPackageService.fetchUserPackages(this.userID).subscribe((userpacks)=>{
    //find name to related pack
          this.packageName = userpacks.find((pack)=>{return pack._id===this.packageID;}).name;
          let existingItems = userpacks.find((pack)=>{return pack._id===this.packageID;}).products;
          this.loadExistingItemToDisplayArray(existingItems);

    //calculate total price
        this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
      });



  }
  
                noClick = new EventEmitter<any>()

  userID = "5eaf18c4d82e71543ce00229";
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

  loadedArray:{_id:Products,quantity:number}[];

  items:Products[];
  addedItems=[];
  headElements =   ['view' ,'name', 'qtn.', 'price', 'remove'];

 



  selectOption(ID: string) {

//recieve all the details related to selected item
  //console.log(ID);
  this.selectedID = ID
  this.selectedItemName = this.items.find((x)=>x._id===ID).productName;
  this.selectedItemImg = this.items.find((x)=>x._id===ID).imgSrc;
  this.selectedItemUnitPrice = this.items.find((x)=>x._id===ID).unitPrice;
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
  let selectedItems = [];
  for(let x of this.addedItems){
    selectedItems.push({_id:x.productID,quantity:x.weight});
  }
//call service method to send data to database
    this.userPackageService.editUserPackage(this.userID,this.packageID,this.packageName,selectedItems).subscribe((x)=>{
  //route to user pack list page
      this.router.navigate(['userpacks','userpacklist']);
    });
    
  }



  loadExistingItemToDisplayArray(existingItems){ 
    for(let y of existingItems){
      this.addedItems.push({
        productID:y._id._id,
        productName:y._id.productName,
        imgSrc:y._id.imgSrc,
        weight:y.quantity,
        totalPricePerItem:(y._id.unitPrice)*(y.quantity/100),
      });
    }
  }


onDeleteClick(){

    this.userPackageService.deleteUserPack(this.packageID).subscribe((x)=>{
      console.log(x);
      this.router.navigate(['userpacks','userpacklist']);
    });

    
    
    

  }

  }
