export class Cart{
    productID:string;
    productName:string;
    imgSrc:string;
    weight:number;
    totalAmountPerItem:number;
    isPack:string;

    constructor(productID:string,productName:string,imgSrc:string,weight:number,totalAmountPerItem:number,isPack:string){
        this.productID= productID;
        this.productName=productName;
        this.imgSrc=imgSrc;
        this.weight = weight;
        this.totalAmountPerItem = totalAmountPerItem;
        this.isPack=isPack;
    }
}
