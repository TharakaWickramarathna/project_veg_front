import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-orders-admin',
  templateUrl: './pending-orders-admin.component.html',
  styleUrls: ['./pending-orders-admin.component.scss']
})
export class PendingOrdersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pendingOrders=[1];
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

}
