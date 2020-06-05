import { MDBModalRef } from 'angular-bootstrap-md';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { Cart } from 'src/app/shared/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirm-popup-modal',
  templateUrl: './order-confirm-popup-modal.component.html',
  styleUrls: ['./order-confirm-popup-modal.component.scss']
})
export class OrderConfirmPopupModalComponent implements OnInit {

  userID:string="5eaf18c4d82e71543ce00229";

  constructor(public modalRef: MDBModalRef,
              private cartService:CartService,
              private orderService:OrdersService,
              private router:Router) { }

  ngOnInit(): void {
  }
  

  onConfirmClick(){
    let cartList:Cart[] = this.cartService.getItems();
    
    //console.log(this.cartService.getItems());

//filter cart item to send confirm request
    let products:{_id:string,quantity:number,isPack:string}[]=[];
    for(let product of cartList){
      products.push({_id:product.productID,quantity:product.weight,isPack:product.isPack});
    }
    let orderObject = {clientID:this.userID,products:products};
    console.log(orderObject);
//confirming order by sending order data to databse through order service
    this.orderService.confirmOrder(orderObject).subscribe((res)=>{
      console.log(res);
      this.modalRef.hide();
      this.router.navigate(['myorders']);
    });
  }

}
