export class UserPackages{
    packageID : string;
    packageName:string;
    price:number;

    constructor(packageID:string,packageName:string,price:number){
        this.packageID=packageID;
        this.packageName=packageName;
        this.price=price;
    }
}