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

  sortOrderByDateAndTime(order:IncomingOrdersModel[]){
    const sortedOrders = order.slice().sort((a:any,b:any) => b.date - a.date);
    return sortedOrders;
  }

  confirmOrder(orderObject:{clientID:string,products:{_id:string,quantity:number,isPack:string}[]}){
    return this.http.post(this.CONFIRM_ORDER_URL,orderObject);
  }

  fetchOrdersFromDatabase(clientID:string){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL+clientID);
  }

  fetchAllPendingOrdersFromDatabase(){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL+"?status=Pending+Approval");
  }

  fetchAllDeliveringOrdersFromDatabase(){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL+"?status=Delivering");
  }

  fetchAllPreparingOrdersFromDatabase(){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL+"?status=Preparing");
  }
}
