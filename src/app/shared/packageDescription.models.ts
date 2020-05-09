import { Products } from 'src/app/shared/products.models';
export class PackageDescription{
    _id: Products;
    quantity:number;

    constructor(products:Products,quantity:number){
        this._id= products;
        this.quantity= quantity;

    }
}