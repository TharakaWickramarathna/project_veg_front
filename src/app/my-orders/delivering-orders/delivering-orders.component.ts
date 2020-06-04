import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivering-orders',
  templateUrl: './delivering-orders.component.html',
  styleUrls: ['./delivering-orders.component.scss']
})
export class DeliveringOrdersComponent implements OnInit {

  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor() { }

  ngOnInit(): void {
  }

}
