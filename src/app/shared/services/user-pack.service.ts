import { UserPackages } from './../models/userPackage.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserPackService {

  userPackChanged = new Subject<UserPackages[]>();

  constructor(private http:HttpClient,
              private router:Router) { 
    //this.fetchUserPackagesFromHttp();
  }

  private userpackages:UserPackages[] = [
    // new UserPackages('1001','My Package 01',750),
    // new UserPackages('1002','My Package 02',1750),
    // new UserPackages('1003','My Package 03',5000),
    // new UserPackages('1004','My Package 04',3250),
    // new UserPackages('1005','My Package 05',1200),
    
];



private GET_USERPACK_URL = "http://localhost:5000/favouritelist/";
private CREATE_USER_PACK = "http://localhost:5000/favouritelist/add";
private EDIT_USER_PACK = "http://localhost:5000/favouritelist/edit/";
private DELETE_USER_PACK = "http://localhost:5000/favouritelist/delete/";

//fetch data from database
fetchUserPackages(u_id){
  //console.log(this.GET_USERPACK_URL+u_id);
  return this.http.get<UserPackages[]>(this.GET_USERPACK_URL+u_id);
}


getPackages(){
  return this.userpackages.slice();
}

getPackage(p:string){
  return this.userpackages.find((package1)=>p===package1._id);
  
}

//add new user packages to the database
addNewUserPackage(clientID:string,packageName:string,products:any[]){
    const userPackObj = {name:packageName,clientID:clientID,availability:true,products:products};
    return this.http.post(this.CREATE_USER_PACK,userPackObj);
  }
//edit userpck
editUserPackage(clientID:string,packageID:string,packageName:string,products:any[]){
    const userPackObj = {name:packageName,clientID:clientID,availability:true,products:products};
    return this.http.patch(this.EDIT_USER_PACK+packageID,userPackObj);
  }
//delete userpack
deleteUserPack(packageID){
    return this.http.delete(this.DELETE_USER_PACK+packageID);
  }


}
