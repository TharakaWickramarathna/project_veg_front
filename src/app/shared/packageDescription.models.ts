import { Products } from 'src/app/shared/products.models';
export class PackageDescription{
    _id: Products;
    quantity:number;

    constructor(_id:Products,quantity:number){
        this._id= _id;
        this.quantity= quantity;

    }
}