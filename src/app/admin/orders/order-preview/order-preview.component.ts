import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {

  orderAmount:number=0;
  deliveryCharges:number=0;
  Comission:number=0;
  totalPrice:number=0;

  packImg="https://i.ndtvimg.com/i/2015-04/fruits-veggies-full_600x350_71428309873.jpg";
  orderID:string;
  statusOfCompletion:string;
  specificOrder:IncomingOrdersModel;

  mainProductList:{productName:string,quantity:number,pricePerItem:number,imgSrc:string}[]=[];

  specificProductList = [1,2];

  constructor(private route:ActivatedRoute,
              private orderService:OrdersService) { }

  ngOnInit(): void {
    console.log(this.mainProductList);
    this.orderID = this.route.snapshot.params['id'];
    this.statusOfCompletion = this.route.snapshot.params['status'];
    console.log(this.statusOfCompletion);

    this.orderService.fetchAllOrdersFromDatabse().subscribe((orders)=>{
      this.selectSpecificOrder(orders);
      this.makeMainProductList(this.specificOrder);
      this.orderAmount=this.specificOrder.orderAmount;
      this.deliveryCharges=this.specificOrder.deliveryCharges;
      this.Comission=this.specificOrder.commision;
      this.totalPrice = this.specificOrder.totalAmount;
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
  }




}
