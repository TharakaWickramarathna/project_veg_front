import { Component, OnInit } from '@angular/core';
import { Observable , Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { NavbarService } from './shared/services/navbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'project-veg';
  navbarStatus = true;
  

  constructor(private navbarService:NavbarService){
    this.navbarStatus = navbarService.getNavbarStatus();
    this.navbarService.navbarStatusChanged.subscribe((newStatus)=>{
      this.navbarStatus=newStatus;
    });
  }

  

  
  
  
}
