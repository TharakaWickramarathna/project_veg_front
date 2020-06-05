import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tracking } from '../models/tracking.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http:HttpClient) { }

  private GET_TRACKING_URL = "http://localhost:5000/tracking/";
  private EDIT_TRACKING_URL = "http://localhost:5000/tracking/edit/";

  getTrackingDetails(orderID:string){
    return this.http.get<Tracking[]>(this.GET_TRACKING_URL+orderID);
  }
  editTrackingStatus(trackingID:string,status:string){
    return this.http.patch(this.EDIT_TRACKING_URL+trackingID,{status:status});
  }

}

