import { UserPackages } from './../userPacks.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPackService {

  constructor() { }

  private userpackages:UserPackages[] = [
    new UserPackages('1001','My Package 01',750),
    new UserPackages('1002','My Package 02',1750),
    new UserPackages('1003','My Package 03',5000),
    new UserPackages('1004','My Package 04',3250),
    new UserPackages('1005','My Package 05',1200),
    
];

getProducts(){
  return this.userpackages.slice();
}

getPackage(p:any){
  return this.userpackages.find((package1)=>p===package1.packageID);
}

addUserPackage(packageID,packageName,price){
  this.userpackages.push(new UserPackages(packageID,packageName,price));
}

updatePackage(packageID,packageName){
  let ind =this.userpackages.indexOf(this.getPackage(packageID));
  this.userpackages[ind].packageName=packageName;
}

removePackage(packageID){
  let i = this.userpackages.indexOf(this.userpackages.find((x)=>x.packageID===packageID));
  this.userpackages.splice(i,1);
}



}
