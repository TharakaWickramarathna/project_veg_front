import {UserPackageProductDescription} from './userPackageDescription.model';

export class UserPackages{
    _id : string;
    clientID:string;
    name:string;
    amount:number;
    availability:boolean;
    date:Date
    products:UserPackageProductDescription[];

    constructor(_id:string,clientID:string,name:string,amount:number,availability:boolean,date:Date,products:UserPackageProductDescription[]){
        this._id=_id;
        this.name=name;
        this.amount=amount;
        this.products=products;
    }
}