import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart } from 'src/app/shared/cart.model';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.scss'],

})
export class FloatBtnComponent implements OnInit {

  notificationCount = 0;

  constructor(private router :Router,
              private cartService :CartService){
              //update notification count on adding
                this.cartService.onAdded.subscribe(
                (newcount:number)=>{this.notificationCount=newcount;}
                );
              //update notificatin count on removing some items
                  this.cartService.onRemoved.subscribe((arr:Cart[])=>{
                    this.notificationCount=arr.length;
                  });

              }

  ngOnInit(): void {
  //get notification count 
    //this.notificationCount=this.cartService.getNumberOfElement();
  }

  onbtnClicked(){
    this.router.navigate(['/cartview']);
    
  }

}
