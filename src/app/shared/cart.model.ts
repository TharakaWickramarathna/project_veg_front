export class Cart{
    cartID:string;
    productID:string;
    productName:string;
    imgSrc:string;
    weight:number;
    totalAmountPerItem:number;
    isPack:string;

    constructor(cartID:string,productID:string,productName:string,imgSrc:string,weight:number,totalAmountPerItem:number,isPack:string){
        this.cartID=cartID;
        this.productID= productID;
        this.productName=productName;
        this.imgSrc=imgSrc;
        this.weight = weight;
        this.totalAmountPerItem = totalAmountPerItem;
        this.isPack=isPack;
    }
}
