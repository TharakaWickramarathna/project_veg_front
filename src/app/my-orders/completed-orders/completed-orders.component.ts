import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.scss']
})
export class CompletedOrdersComponent implements OnInit {

  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor() { }

  ngOnInit(): void {
  }

}
