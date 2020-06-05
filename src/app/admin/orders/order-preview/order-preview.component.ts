import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';
import { TrackingService } from 'src/app/shared/services/tracking.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {

  orderStatus:string;
  editingStatus:boolean=false;
  disableConfirmButton:boolean=true;

  orderAmount:number=0;
  deliveryCharges:number=0;
  Comission:number=0;
  totalPrice:number=0;

  packImg="https://i.ndtvimg.com/i/2015-04/fruits-veggies-full_600x350_71428309873.jpg";
  userPackImg="https://cdn.catchme.lk/products/2437/800-fresh-vegetable-pack-5kg-approx-15856253718038.png";
  orderID:string;
  trackingID:string;
  statusOfCompletion:string;
  newStatusOfCompletion:string;
  specificOrder:IncomingOrdersModel;

  mainProductList:{productName:string,quantity:number,pricePerItem:number,imgSrc:string}[]=[];

  specificProductList = [1,2];
  statusArrayForDisplay:string[]=[];

  constructor(private route:ActivatedRoute,
              private orderService:OrdersService,
              private trackingService:TrackingService) { }

  ngOnInit(): void {
    this.orderID = this.route.snapshot.params['id'];
    this.statusOfCompletion = this.route.snapshot.params['status'];
  //set status array to view in drop down
    this.makeStatusArrayForDisplay();

  //get all orders
    this.orderService.fetchAllOrdersFromDatabse().subscribe((orders)=>{
      this.selectSpecificOrder(orders);
      console.log(this.specificOrder);
      this.makeMainProductList(this.specificOrder);
  //assign money values to variables
      this.orderAmount=this.specificOrder.orderAmount;
      this.deliveryCharges=this.specificOrder.deliveryCharges;
      this.Comission=this.specificOrder.commision;
      this.totalPrice = this.specificOrder.totalAmount;
  
    });
  //get tracking details
      this.trackingService.getTrackingDetails(this.orderID).subscribe((tracking)=>{
        this.trackingID=tracking[0]._id;
        //console.log(this.trackingID);
      });
  }

  selectSpecificOrder(orders:IncomingOrdersModel[]){
    this.specificOrder = orders.find((o)=>o._id===this.orderID);
    }

  makeMainProductList(specificOrder:IncomingOrdersModel){
    for(let v of specificOrder.vegetables){
      let x = {productName:v._id.productName,quantity:v.quantity,pricePerItem:v.pricePerItem,imgSrc:v._id.imgSrc};
      this.mainProductList.push(x);
    }

    for(let v of specificOrder.featuredPacks){
      let x = {productName:v._id.name,quantity:v.quantity,pricePerItem:v.packAmount,imgSrc:this.packImg};
      this.mainProductList.push(x);
      //console.log(v);
    }

    for(let v of specificOrder.userPacks){
      let x = {productName:v._id.name,quantity:v.quantity,pricePerItem:v.packAmount,imgSrc:this.userPackImg};
      this.mainProductList.push(x);
      //console.log(v);
    }
  }

  onChangeIditingMode(){
    this.editingStatus=true;
  }

  makeStatusArrayForDisplay(){
    let st = ["Pending Approval","Preparing","Delivering","Completed"];
    if(this.statusOfCompletion==="Pending Approval"){
      this.statusArrayForDisplay.push(st[1]);
    }
    else if(this.statusOfCompletion==="Preparing"){
      this.statusArrayForDisplay.push(st[0]);
      this.statusArrayForDisplay.push(st[2]);
    }
    else if(this.statusOfCompletion==="Delivering"){
      this.statusArrayForDisplay.push(st[1]);
      this.statusArrayForDisplay.push(st[3]);
    }
    
  }

  selectOption(status){
    
   if(this.statusArrayForDisplay.indexOf(status)>=0){
    this.newStatusOfCompletion=status;
    this.disableConfirmButton=false;
   }
   else{
     console.log("no");
     this.disableConfirmButton=true;
   }

  }

  onCancelClick(){
    this.editingStatus=false;
    this.disableConfirmButton=true;
  }

  onConfirmClick(){
    this.trackingService.editTrackingStatus(this.trackingID,this.newStatusOfCompletion).subscribe((res)=>{
      console.log(res);
    });
  }






}
