import { Packages } from './../packages.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private packages:Packages[] = [];

  packageschanged = new Subject<Packages[]>();

  constructor(private http:HttpClient){
    this.getProductsFromHttp();
}

getProductsFromHttp(){
    
    this.http.get<Packages[]>('http://localhost:5000/suggestedlist/view').subscribe((packages)=>{
    //let recArray:Packages[]=[];
    console.log(packages);

    // for(let i = 0;i<Object.keys(products).length;i++){
    //     let x=products[i];
    //     recArray.push(new Products(x._id,x.name,x.pricePerUnit,x.minOrder,x.catagory,x.availability,"sss"));
    // }

    // this.products = recArray;
    this.packages = packages;
   // console.log(products[0].productName);
    this.packageschanged.next(this.packages.slice());
});

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

updatePackage(packageID,packageName){
 // let ind =this.packages.indexOf(this.getPackage(packageID));
 // this.packages[ind].packageName=packageName;
}

removePackage(packageID){
 // let i = this.packages.indexOf(this.packages.find((x)=>x.packageID===packageID));
 // this.packages.splice(i,1);
}


}
