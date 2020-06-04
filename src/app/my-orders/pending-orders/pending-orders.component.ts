import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent implements OnInit {

  userID="5eaf18c4d82e71543ce00229";
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];
  pendingOrders:IncomingOrdersModel[];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.fetchPendingOrdersFromDatabase(this.userID).subscribe((orders)=>{
      this.pendingOrders = this.orderService.sortOrderByDateAndTime(orders);
      //console.log(this.pendingOrders);
    });
  }

  onOrderClick(){
    console.log("jjj");
  }

}
