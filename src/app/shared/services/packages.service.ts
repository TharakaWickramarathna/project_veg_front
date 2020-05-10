import { Products } from './../products.models';
import { Packages } from './../packages.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private GET_PACKAGES = "http://localhost:5000/suggestedlist/view";
  private EDIT_PACKAGES = "http://localhost:5000/suggestedlist/edit/";

  private packages:Packages[] = [];

  packageschanged = new Subject<Packages[]>();

  constructor(private http:HttpClient){
   // this.getProductsFromHttp();
}

getProductsFromHttp(){
    
  return this.http.get<Packages[]>(this.GET_PACKAGES);
}

getProducts(){
  return this.packages.slice();
}

getPackage(p:any){
  return this.packages.find((package1)=>p===package1._id);
}

addFeaturePackage(packageID,packageName,price,imgsrc){
 // this.packages.push(new Packages(packageID,packageName,price,imgsrc));
}

updatePackage(_id:string, name:string, discount:number, availability:boolean, products:any[]){
  const newupdatedPackage = {name:name,discount:discount,availability:true,products:products};
  return this.http.patch(this.EDIT_PACKAGES+_id,newupdatedPackage);
}

removePackage(packageID){
 // let i = this.packages.indexOf(this.packages.find((x)=>x.packageID===packageID));
 // this.packages.splice(i,1);
}

}


