import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.fetchAllOrdersFromDatabase().subscribe((res)=>{
      console.log(res);
    });
  }



}
