import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent implements OnInit {

  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor() { }

  ngOnInit(): void {
  }

}
