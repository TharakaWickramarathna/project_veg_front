import { Component, OnInit } from '@angular/core';
import { Observable , Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { NavbarService } from './shared/services/navbar.service';
import { CartService } from './shared/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'project-veg';
  navbarStatus = true;
  userID="5eaf18c4d82e71543ce00229";

  constructor(private navbarService:NavbarService,
              private cartService:CartService){
    this.navbarStatus = navbarService.getNavbarStatus();
    this.navbarService.navbarStatusChanged.subscribe((newStatus)=>{
      this.navbarStatus=newStatus;
    });
    
    this.cartService.fetchCartItems(this.userID).subscribe((existingItems)=>{
      this.cartService.fillExistingItem(existingItems);
    
  });
  
  }



  

  
  
  
}
