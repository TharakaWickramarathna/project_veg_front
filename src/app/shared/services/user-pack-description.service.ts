import { UserPackDescription } from './../userPackDescription.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserPackDescriptionService {

  constructor(private http:HttpClient) { 
    
  }

  private userPackaDescription:UserPackDescription[] = [
    new UserPackDescription('1001','002',500),
    new UserPackDescription('1001','003',500), 
    new UserPackDescription('1001','006',250), 
    new UserPackDescription('1001','001',100), 
    new UserPackDescription('1002','003',300), 
    new UserPackDescription('1002','005',750), 
    new UserPackDescription('1002','001',900), 
    new UserPackDescription('1003','001',500), 
    new UserPackDescription('1003','003',750), 
    new UserPackDescription('1003','004',300),  
    new UserPackDescription('1003','002',400), 
    new UserPackDescription('1004','002',200), 
    new UserPackDescription('1004','003',350), 
    new UserPackDescription('1004','005',600),
    new UserPackDescription('1005','003',350), 
    new UserPackDescription('1005','005',600),
    new UserPackDescription('1005','001',150), 
    new UserPackDescription('1005','002',400) 
    
];



getPackagesDescriptions(){
  return this.userPackaDescription.slice();
}

getPackagesDescription(packageID){


  return this.userPackaDescription.filter((packageDes)=>packageID===packageDes.packageID);
}

addUserPackageDescription(packageID,productID,weight){
  this.userPackaDescription.push(new UserPackDescription(packageID,productID,weight));
}

removePackageDescription(packageID){
//remove all the existing items regarding to this packageID
  while(this.userPackaDescription.find((x)=>x.packageID===packageID)){
    let index =this.userPackaDescription.indexOf(this.userPackaDescription.find((x)=>x.packageID===packageID));
    this.userPackaDescription.splice(index,1);
    console.log(index);
    }
}


updateUserPackageDescription(packageID,newArray){
//remove all the existing items regarding to this packageID  
  while(this.userPackaDescription.find((x)=>x.packageID===packageID)){
    let index =this.userPackaDescription.indexOf(this.userPackaDescription.find((x)=>x.packageID===packageID));
    this.userPackaDescription.splice(index,1);
    console.log(index);
    }
//get incoming updated array
  let updatedItem = newArray;
  
//add updated items to the description array
  for(let x of updatedItem){
    this.addUserPackageDescription(packageID,x.productID,x.weight);
  }
  
}


}
