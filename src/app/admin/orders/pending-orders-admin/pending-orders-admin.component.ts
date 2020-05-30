import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders-service.service';

@Component({
  selector: 'app-pending-orders-admin',
  templateUrl: './pending-orders-admin.component.html',
  styleUrls: ['./pending-orders-admin.component.scss']
})
export class PendingOrdersAdminComponent implements OnInit {
  pendingOrders=[1];
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.fetchAllOrdersFromDatabase().subscribe((res)=>{
      console.log(res);
    });

  }
  

}
