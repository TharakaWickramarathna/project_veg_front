import { OrderConfirmPopupModalComponent } from './oderConfirm-popup-modal/order-confirm-popup-modal/order-confirm-popup-modal.component';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from '../shared/cart.model';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {

  cartItems: Cart[] = [];
  item :Array<any>;
  totalAmount: number = 0;

  userID="5eaf18c4d82e71543ce00229";

  constructor(private cartService: CartService,
    private modalService: MDBModalService) {
      this.item = new Array<any>();

    this.cartService.onAdded.subscribe(()=>{
      this.cartItems=this.cartService.getItems();
      this.calculateTotalAmount();
    });

    this.cartService.onRemoved.subscribe(()=>{
      this.cartItems = this.cartService.getItems();
      this.calculateTotalAmount();
    });
    
  }

  si = '';
  modalRef: MDBModalRef;

  orderConfirmModal() {
    this.modalRef = this.modalService.show(OrderConfirmPopupModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-dialog-scrollable modal-md',
      containerClass: 'modal fade bottom',
      role: 'document',
      animated: true,
      data: {
        heading: 'Add to cart Confirmation',
        content: { heading: 'Content heading', description: 'Content description' }
      }
    });

    this.modalRef.content.action.subscribe((result: any) => { this.si = result; });
  }

  ngOnInit() {
    this.cartItems=this.cartService.getItems();
    this.calculateTotalAmount();
}


 

  headElements = ['ID', 'Product View', 'Product Name', 'Quantity', 'Price', 'Remove'];
//click on remove items from cart
  onClickRemove(productID,isPack) {
    this.cartService.removeItem(productID);
    console.log(productID);
    
  }

  onSaveClick(){

//filter details to send database
    let products:{productId:string,quantity:number,isPack:string}[]=[];
    for(let product of this.cartItems){
      products.push({productId:product.productID,quantity:product.weight,isPack:product.isPack});
    }

    //console.log(products);
//send data to database using service
    this.cartService.saveCartToDatabase(this.userID,products).subscribe((res)=>{
        console.log("succesfullu added cart to database");
    });
  }

  calculateTotalAmount(){
    let amount = 0;
    for (let x of this.cartItems) {
      amount = amount+x.totalAmountPerItem;
    }
    this.totalAmount = amount;
  }

}
