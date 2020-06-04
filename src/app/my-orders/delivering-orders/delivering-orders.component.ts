import { Component, OnInit } from '@angular/core';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';
import { OrdersService } from 'src/app/shared/services/orders-service.service';

@Component({
  selector: 'app-delivering-orders',
  templateUrl: './delivering-orders.component.html',
  styleUrls: ['./delivering-orders.component.scss']
})
export class DeliveringOrdersComponent implements OnInit {

  userID="5eaf18c4d82e71543ce00229";
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];
  deliveringOrders:IncomingOrdersModel[];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.fetchDeliveringOrdersFromDatabase(this.userID).subscribe((orders)=>{
      this.deliveringOrders = this.orderService.sortOrderByDateAndTime(orders);
      //console.log(this.deliveringOrders);
    });
  }

}
