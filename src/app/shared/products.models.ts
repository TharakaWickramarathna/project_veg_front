export class Products{
    productID : string;
    productName:string;
    unitPrice:number;
    minimumOrder:number;
    category:string;
    availability:boolean;
    imgSrc:string;


    constructor(productID:string,productName:string,unitPrice:number,minimumOrder:number,category:string,availability:boolean,imgSrc:string){
        this.productID=productID;
        this.productName=productName;
        this.unitPrice=unitPrice;
        this.minimumOrder = minimumOrder;
        this.category = category;
        this.availability = availability;
        this.imgSrc= imgSrc;
    }
}