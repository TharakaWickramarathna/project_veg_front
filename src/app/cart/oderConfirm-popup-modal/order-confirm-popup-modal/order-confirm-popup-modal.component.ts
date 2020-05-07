import { MDBModalRef } from 'angular-bootstrap-md';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirm-popup-modal',
  templateUrl: './order-confirm-popup-modal.component.html',
  styleUrls: ['./order-confirm-popup-modal.component.scss']
})
export class OrderConfirmPopupModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,) { }

  ngOnInit(): void {
  }

}
