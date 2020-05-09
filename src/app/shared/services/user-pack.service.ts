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
fetchUserPackagesFromHttp(u_id){
  //console.log(this.GET_USERPACK_URL+u_id);
  this.http.get<UserPackages[]>(this.GET_USERPACK_URL+u_id).subscribe((userpacks)=>{
    //console.log("Fetching all Userpack",userpacks);
    this.userpackages=userpacks;
    this.userPackChanged.next(this.userpackages.slice());
    
    });
}


getPackages(){
  return this.userpackages.slice();
}

getPackage(p:string){
  return this.userpackages.find((package1)=>p===package1._id);
  
}

//add new user packages to the database
async addNewUserPackage(packageName:string,addedItems:any[]){
    let products = addedItems;
    let clientID = "5ea91de10f61de375c8775b5";
    const userPackObj = {name:packageName,clientID:clientID,availability:true,products};
    //console.log(userPackObj);
    this.http.post(this.CREATE_USER_PACK,userPackObj).subscribe((x)=>{
        console.log(x);
        
    });
  }

async editUserPackage(packageID:string,packageName:string,addedItems:any[]){
    let products = addedItems;
    let clientID = "5ea91de10f61de375c8775b5";
    const userPackObj = {name:packageName,clientID:clientID,availability:true,products};
    // console.log(this.EDIT_USER_PACK+packageID);
    // console.log(userPackObj);
    this.http.patch(this.EDIT_USER_PACK+packageID,userPackObj).subscribe((x)=>{
        console.log(x);
    });
  }

 async deleteUserPack(packageID){
    this.http.delete(this.DELETE_USER_PACK+packageID).subscribe((x)=>{
      console.log(x);
    });
  }

// updatePackage(packageID,packageName){
//   let ind =this.userpackages.indexOf(this.getPackage(packageID));
//   this.userpackages[ind].packageName=packageName;
// }

// removePackage(packageID){
//   let i = this.userpackages.indexOf(this.userpackages.find((x)=>x.packageID===packageID));
//   this.userpackages.splice(i,1);
// }



}
