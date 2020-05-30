import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncomingOrdersModel } from '../models/incomingOrder.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  private CONFIRM_ORDER_URL = "http://localhost:5000/orders/add";
  private GET_ORDERS_URL = "http://localhost:5000/orders/";
  private GET_ALL_ORDERS_URL = "http://localhost:5000/orders/all";

  confirmOrder(orderObject:{clientID:string,products:{_id:string,quantity:number,isPack:string}[]}){
    return this.http.post(this.CONFIRM_ORDER_URL,orderObject);
  }

  fetchOrdersFromDatabase(clientID:string){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL+clientID);
  }

  fetchAllOrdersFromDatabase(){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ALL_ORDERS_URL);
  }
}
