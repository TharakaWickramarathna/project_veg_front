import { Component, OnInit,EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavbarService } from '../shared/services/navbar.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,OnDestroy {

  

  constructor(private navbarService:NavbarService) {
    this.navbarService.hide();
   }

  ngOnInit(): void {
    
  }

  
  ngOnDestroy(){
    this.navbarService.show();
  }

}
