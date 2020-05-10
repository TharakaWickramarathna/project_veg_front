import { PackageDescription } from 'src/app/shared/packageDescription.models';
export class Packages{
    _id : string;
    name: string;
    amount:number;
    discount:number;
    date:string;
    products:PackageDescription[];
    availability:boolean;

    constructor(packageID:string,packageName:string,price:number, products:PackageDescription[]){
        this._id=packageID;
        this.name=packageName;
        this.products=products;
        this.amount=price;
    }
}