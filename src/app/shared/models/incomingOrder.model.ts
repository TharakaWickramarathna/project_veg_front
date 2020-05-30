import { Products } from '../products.models';
import { Packages } from '../packages.model';
import { UserPackages } from './userPackage.model';

export class IncomingOrdersModel{
 
    natureOfOrder:string;
    statusOfCompletion:string;
    _id:string;
    clientID: "5eaf18c4d82e71543ce00229";
    date:string;
    orderAmount:number;
    deliveryCharges:number;
    commision:string;
    totalAmount:string;
    vegetables:{_id:Products,quantity:number,pricePerItem:number,isPack:string}[];
    featuredPacks:{_id:Packages,quantity:number,pricePerItem:number,isPack:string}[];
    userPacks:{_id:UserPackages,quantity:number,pricePerItem:number,isPack:string}[];

  /*          
            "featuredPacks": [
                {
                    "_id": {
                        "availability": true,
                        "_id": "5ec8b1e449199a0b48be1262",
                        "name": "pack 01",
                        "discount": 10,
                        "products": [
                            {
                                "_id": "5ec7b4d2f3cf07371067a86c",
                                "quantity": 300
                            },
                            {
                                "_id": "5ec7b50ff3cf07371067a86e",
                                "quantity": 200
                            },
                            {
                                "_id": "5ec7b506f3cf07371067a86d",
                                "quantity": 300
                            }
                        ],
                        "date": "2020-05-23T05:17:24.418Z",
                        "amount": 800,
                        "discountAmount": 80,
                        "total": 720
                    },
                    "quantity": 1,
                    "isPack": "p",
                    "packAmount": 720
                }
            ],
            "userPacks": [
                {
                    "_id": {
                        "availability": true,
                        "_id": "5ecff1b5263896254c6c073d",
                        "name": "hhh",
                        "clientID": "5eaf18c4d82e71543ce00229",
                        "products": [
                            {
                                "_id": "5ec7b4d2f3cf07371067a86c",
                                "quantity": 200
                            },
                            {
                                "_id": "5ec7b506f3cf07371067a86d",
                                "quantity": 200
                            }
                        ],
                        "date": "2020-05-28T17:15:33.352Z",
                        "amount": 400
                    },
                    "quantity": 1,
                    "isPack": "u",
                    "packAmount": 400
                },
                {
                    "_id": {
                        "availability": true,
                        "_id": "5ecff1c1263896254c6c073e",
                        "name": "lk",
                        "clientID": "5eaf18c4d82e71543ce00229",
                        "products": [
                            {
                                "_id": "5ec7b4d2f3cf07371067a86c",
                                "quantity": 200
                            }
                        ],
                        "date": "2020-05-28T17:15:45.358Z",
                        "amount": 200
                    },
                    "quantity": 1,
                    "isPack": "u",
                    "packAmount": 200
                }
            ],
            "__v": 0
        },
        

            */
        }
