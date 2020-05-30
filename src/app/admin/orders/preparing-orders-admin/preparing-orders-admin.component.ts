import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparing-orders-admin',
  templateUrl: './preparing-orders-admin.component.html',
  styleUrls: ['./preparing-orders-admin.component.scss']
})
export class PreparingOrdersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  preparingOrders=[1];
  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];
}
