import { Products } from '../products.models';
import { Packages } from '../packages.model';
import { UserPackages } from './userPackage.model';

export class IncominCartModel{

    clientId:string;
    listOfProduct:{itemList:Products,quantity:number,totalPricePerItem:number}[];
    listOfSuggestedPack:{itemList:Packages,quantity:number,totalPricePerItem:number}[];
    listOfUserPack:{itemList:UserPackages,quantity:number,totalPricePerItem:number}[];
}