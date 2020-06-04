import { Component, OnInit } from '@angular/core';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';
import { OrdersService } from 'src/app/shared/services/orders-service.service';

@Component({
  selector: 'app-preparing-orders',
  templateUrl: './preparing-orders.component.html',
  styleUrls: ['./preparing-orders.component.scss']
})
export class PreparingOrdersComponent implements OnInit {

  userID="5eaf18c4d82e71543ce00229";
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];
  preparingOrders:IncomingOrdersModel[];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.fetchPreparingOrdersFromDatabase(this.userID).subscribe((orders)=>{
      this.preparingOrders = this.orderService.sortOrderByDateAndTime(orders);
      console.log(this.preparingOrders);
    });
  }

}
