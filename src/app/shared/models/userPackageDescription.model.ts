import { Products } from '../products.models';

export class UserPackageProductDescription{
    _id:Products;
    quantity:number;

    constructor(_id:Products,quantity:number){
        this._id=_id;
        this.quantity= quantity;

    }
}