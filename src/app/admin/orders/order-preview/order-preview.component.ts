import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/shared/services/orders-service.service';
import { IncomingOrdersModel } from 'src/app/shared/models/incomingOrder.model';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {

  orderID:string;
  statusOfCompletion:string;
  specificOrder:IncomingOrdersModel;

  constructor(private route:ActivatedRoute,
              private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderID = this.route.snapshot.params['id'];
    this.statusOfCompletion = this.route.snapshot.params['status'];
    console.log(this.statusOfCompletion);

    this.orderService.fetchAllOrdersFromDatabse().subscribe((orders)=>{
      this.selectSpecificOrder(orders);
      console.log(this.specificOrder);
    });
  }

  selectSpecificOrder(orders:IncomingOrdersModel[]){
    this.specificOrder = orders.find((o)=>o._id===this.orderID);
  }

}
