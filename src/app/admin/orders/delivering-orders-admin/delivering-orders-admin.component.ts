import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';

@Component({
  selector: 'app-delivering-orders-admin',
  templateUrl: './delivering-orders-admin.component.html',
  styleUrls: ['./delivering-orders-admin.component.scss']
})
export class DeliveringOrdersAdminComponent implements OnInit {

  deliveringOrders:IncomingOrdersModel[];
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.fetchAllDeliveringOrdersFromDatabase().subscribe((deliveringOrders:IncomingOrdersModel[])=>{

      //console.log(deliveringOrders[0].date);

      for(let x of deliveringOrders){
        x.date=new Date(x.date);
      }

      //console.log(deliveringOrders[0].date);

      this.deliveringOrders = this.orderService.sortOrderByDateAndTime(deliveringOrders);

     let x = new Date(this.deliveringOrders[0].date);
     let y = new Date(this.deliveringOrders[1].date);
     console.log(x.toString());
     console.log(y.toString());
      
    });

    const activities:{title:string,date:Date}[] = [
      { title: 'Hiking', date: new Date('2020-05-30T20:02:27.722Z') },
      { title: 'Hiking', date: new Date('2020-05-30T20:07:18.621Z') },
      { title: 'Shopping', date: new Date('2020-05-30T19:58:17.029Z') }
      //{ title: 'Trekking', date: new Date('2019-06-22T20:27:33.709Z') }
    ];
    //console.log(activities);
    
//sort array by date and time
    const sortedActivities = activities.slice().sort((a:any,b:any) => a.date - b.date);

    //console.log(sortedActivities);

  }

  
  
}
