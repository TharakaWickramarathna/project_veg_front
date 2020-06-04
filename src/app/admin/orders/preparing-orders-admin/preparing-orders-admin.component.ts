import { Component, OnInit } from '@angular/core';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preparing-orders-admin',
  templateUrl: './preparing-orders-admin.component.html',
  styleUrls: ['./preparing-orders-admin.component.scss']
})
export class PreparingOrdersAdminComponent implements OnInit {

  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  preparingOrders:IncomingOrdersModel[];

  constructor(private orderService:OrdersService,
              private router:Router) { }

  ngOnInit(): void {
    this.orderService.fetchAllPreparingOrdersFromDatabase().subscribe((preparingOrders:IncomingOrdersModel[])=>{
      this.preparingOrders = this.orderService.sortOrderByDateAndTime(preparingOrders);
    });

  }

  onOrderClick(orderID:string,statusOfCompletion:string){
    this.router.navigate(['admin','orders',orderID,statusOfCompletion]);
  }
}
