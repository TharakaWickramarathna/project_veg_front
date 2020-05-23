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
      
      //added from backend developer
      // cartService.getCartItems().subscribe((items) =>{
      //   this.item = items;
      // });
      // end



    //getting new array after removing some element from cart
    // this.cartService.onRemoved.subscribe((arr:Cart[])=>{
    //     this.cartItems=arr;
    //calculating new total after removing items
    // this.totalAmount=0;
    // for(var x=0; x<this.cartItems.length; x++){
    //   this.totalAmount=this.totalAmount+this.cartItems[x].totalAmountPerItem;
    // }
    // });
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
    this.cartItems = this.cartService.getItems();

    for (var x = 0; x < this.cartItems.length; x++) {
      this.totalAmount = this.totalAmount + this.cartItems[x].totalAmountPerItem;
    }
    //console.log(this.cartItems);

  }

  headElements = ['ID', 'Product View', 'Product Name', 'Quantity', 'Price', 'Remove'];

  // onClickRemove(productID) {
  //   this.cartService.removeItem(productID);
  // }

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

}
