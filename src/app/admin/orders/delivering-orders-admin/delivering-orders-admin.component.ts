import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivering-orders-admin',
  templateUrl: './delivering-orders-admin.component.html',
  styleUrls: ['./delivering-orders-admin.component.scss']
})
export class DeliveringOrdersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deliveringOrders=[1];
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];
}