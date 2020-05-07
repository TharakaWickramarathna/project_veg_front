export class PackageDescription{
    packageID : string;
    productID:string;
    quantity:number;

    constructor(packageID:string,productID:string,quantity:number){
        this.packageID=packageID;
        this.productID=productID;
        this.quantity= quantity;

    }
}