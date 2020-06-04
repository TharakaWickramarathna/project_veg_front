import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncomingOrdersModel } from '../models/incomingOrder.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  private CONFIRM_ORDER_URL = "http://localhost:5000/orders/add";
  private GET_ORDERS_URL = "http://localhost:5000/orders/";
  //private GET_CLIENT_ORDERS_URL = "http://localhost:5000/orders/";

  sortOrderByDateAndTime(order: IncomingOrdersModel[]) {
    //convert all string date type to Date type  
    for (let x of order) {
      x.date = new Date(x.date);
    }
    const sortedOrders = order.slice().sort((a: any, b: any) => a.date - b.date);
    return sortedOrders;
  }

  confirmOrder(orderObject: { clientID: string, products: { _id: string, quantity: number, isPack: string }[] }) {
    return this.http.post(this.CONFIRM_ORDER_URL, orderObject);
  }

  fetchOrdersFromDatabase(clientID: string) {
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL + clientID);
  }

  fetchAllPendingOrdersFromDatabase() {
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL + "?status=Pending+Approval");
  }

  fetchAllDeliveringOrdersFromDatabase() {
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL + "?status=Delivering");
  }

  fetchAllPreparingOrdersFromDatabase() {
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL + "?status=Preparing");
  }

  fetchPendingOrdersFromDatabase(clientID:string){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL +clientID+"/"+ "?status=Pending+Approval");
  }

  fetchPreparingOrdersFromDatabase(clientID:string){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL +clientID+"/"+ "?status=Preparing");
  }

  fetchDeliveringOrdersFromDatabase(clientID:string){
    return this.http.get<IncomingOrdersModel[]>(this.GET_ORDERS_URL +clientID+"/"+ "?status=Delivering");
  }
}
