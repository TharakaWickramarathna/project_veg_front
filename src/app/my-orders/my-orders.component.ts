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

        this.pendingOrders = orders;
        this.pendingOrders.sort()

        const activities:{title:string,date:Date}[] = [
          { title: 'Hiking', date: new Date('2020-05-30T20:02:27.722Z') },
          { title: 'Hiking', date: new Date('2020-05-30T20:07:18.621Z') },
          { title: 'Shopping', date: new Date('2020-05-30T19:58:17.029Z') }
          //{ title: 'Trekking', date: new Date('2019-06-22T20:27:33.709Z') }
        ];
        console.log(activities);
        
//sort array by date and time
        const sortedActivities = activities.slice().sort((a:any,b:any) => a.date - b.date);
        

        console.log(sortedActivities);



        


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





}
