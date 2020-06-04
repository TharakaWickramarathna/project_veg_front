import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';

@Component({
  selector: 'app-pending-orders-admin',
  templateUrl: './pending-orders-admin.component.html',
  styleUrls: ['./pending-orders-admin.component.scss']
})
export class PendingOrdersAdminComponent implements OnInit {
  
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  pendingOrders:IncomingOrdersModel[];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.fetchAllPendingOrdersFromDatabase().subscribe((pendingOrders:IncomingOrdersModel[])=>{
      this.pendingOrders = this.orderService.sortOrderByDateAndTime(pendingOrders);
    });

  }
  

}
