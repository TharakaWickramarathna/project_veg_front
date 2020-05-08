export class Products{
    _id : string;
    productName:string;
    unitPrice:number;
    minimumOrder:number;
    category:string;
    availability:boolean;
    imgSrc:string;


    constructor(productID:string,productName:string,unitPrice:number,minimumOrder:number,category:string,availability:boolean,imgSrc:string){
        this._id=productID;
        this.productName=productName;
        this.unitPrice=unitPrice;
        this.minimumOrder = minimumOrder;
        this.category = category;
        this.availability = availability;
        this.imgSrc= imgSrc;
    }
}