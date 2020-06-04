import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivering-orders-admin',
  templateUrl: './delivering-orders-admin.component.html',
  styleUrls: ['./delivering-orders-admin.component.scss']
})
export class DeliveringOrdersAdminComponent implements OnInit {

  deliveringOrders:IncomingOrdersModel[];
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor(private orderService:OrdersService,
              private router:Router) { }

  ngOnInit(): void {
    this.orderService.fetchAllDeliveringOrdersFromDatabase().subscribe((deliveringOrders:IncomingOrdersModel[])=>{
      this.deliveringOrders = this.orderService.sortOrderByDateAndTime(deliveringOrders);
      });

  }

  onOrderClick(orderID:string,statusOfCompletion:string){
    this.router.navigate(['admin','orders',orderID,statusOfCompletion]);
  }

  
  
}
