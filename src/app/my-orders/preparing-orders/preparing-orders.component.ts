import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparing-orders',
  templateUrl: './preparing-orders.component.html',
  styleUrls: ['./preparing-orders.component.scss']
})
export class PreparingOrdersComponent implements OnInit {

  headElements = ['Order ID', 'Date' ,'Time', 'Address', 'Total','Order State'];

  constructor() { }

  ngOnInit(): void {
  }

}
