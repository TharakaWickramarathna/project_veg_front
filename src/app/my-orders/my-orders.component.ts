import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/services/orders-service.service';

import { IncomingOrdersModel } from '../shared/models/incomingOrder.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  userID:string="5eaf18c4d82e71543ce00229";
  pendingOrders:IncomingOrdersModel[]=[];
  preparingOrders:IncomingOrdersModel[]=[];
  DeliveringOrders:IncomingOrdersModel[]=[];
  //CompletedOrders:IncomingOrdersModel[]=[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.fetchOrdersFromDatabase(this.userID).subscribe((orders)=>{




        


      // let x:Date=new Date(orders[0].date);
      // let date = x.getFullYear()+"/"+x.getMonth()+"/"+x.getDate();
      // let time = x.getHours()+"."+x.getMinutes();
      
      
    });
  }

  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  prepareOrdersToDisplay(orders:IncomingOrdersModel[]){
    for(let order of orders){
      if(order.statusOfCompletion==="Pending Approval"){

      }
    }
  }

  sortOrderByDateAndTime(order:IncomingOrdersModel[]){
    const sortedOrders = order.slice().sort((a:any,b:any) => b.date - a.date);
    return sortedOrders;
  }





}
