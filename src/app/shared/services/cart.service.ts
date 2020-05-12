import { PackageDescriptionService } from './package-description.service';
import { Cart } from '../cart.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';
import { PackagesService } from './packages.service';
import { strict } from 'assert';
import { UserPackService } from './user-pack.service';
import { UserPackDescriptionService } from './user-pack-description.service';
import { Subject } from 'rxjs';

//added from backend developer
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private ADD_TO_CART_URL = 'http://localhost:5000/product/add-to-cart/5eaa93a300515853084feb3c/100';
    private VIEW_CART_URL = 'http://localhost:5000/product/cart-view';

    onAdded = new EventEmitter<number>();
    onRemoved = new Subject<Cart[]>();

    cartID: string;
    productName: string;
    packageName: string;
    imgSrc: string;
    isPack: string;

    constructor(private productService: ProductsService,
        private packageService: PackagesService,
        private packageDescriptionService: PackageDescriptionService,
        private userPackageService: UserPackService,
        private userPackageDescriptionService: UserPackDescriptionService,
        private http: HttpClient) { }

    cart: Cart[] = [];

//add vegetable to the cart
    addItems(productID,productName,imgSrc, weight, totalAmountPerItem,isPack) {

        if (this.getItem(productID)) {
            let ind = this.cart.indexOf(this.getItem(productID));
            this.cart[ind].weight = this.cart[ind].weight + weight;
            this.cart[ind].totalAmountPerItem = this.cart[ind].totalAmountPerItem + totalAmountPerItem;
        }
        else {
            this.cart.push(new Cart(productID,productName,imgSrc, weight, totalAmountPerItem, isPack));
            this.onAdded.emit(this.getNumberOfElement());  

        }
        

    }

    // //added by backend developer
    // add_to_cart(productID, weight) {
    //     let header = new HttpHeaders();
    //     header.append('Content-Type', 'application/json');
    //     return this.http.post<any>(this.ADD_TO_CART_URL, { headers: header });
    // }

    // getCartItems(){
    //     let header = new HttpHeaders();
    //     header.append('Content-Type', 'application/json');
    //     return this.http.post<any>(this.VIEW_CART_URL, { headers: header });
    // }

    // //end





//add feature package to the cart
    addPackages(packageID, name, total) {

        if (this.getPackage(packageID)) {
            let ind = this.cart.indexOf(this.getPackage(packageID));
            this.cart[ind].weight = this.cart[ind].weight + 1;
            this.cart[ind].totalAmountPerItem = this.cart[ind].totalAmountPerItem + total;
        }
        else {
            let isPack = "p";
            let imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-hrfFhs9wpzC_yxjE5A0X737NeVOEKloqJVDF6wAVJNv7qA9q&usqp=CAU";
            this.cart.push(new Cart(packageID,name,imgSrc,1, total,isPack));
            this.onAdded.emit(this.getNumberOfElement());
        }



    }


    addUserPackages(packageID, userpackname,weight, price) {
        if (this.getUserPackage(packageID)) {
            let ind = this.cart.indexOf(this.getUserPackage(packageID));
            this.cart[ind].weight = this.cart[ind].weight + 1;
            this.cart[ind].totalAmountPerItem = this.cart[ind].totalAmountPerItem + price;
        }
        else {
            let isPack = 'u';
            //let packageName = this.userPackageService.getPackage(packageID).name;
            let imgSrc = 'https://i.dlpng.com/static/png/351027_preview.png';
            this.cart.push(new Cart(packageID, userpackname,imgSrc, weight, price, isPack));
            this.onAdded.emit(this.getNumberOfElement());

        }




    }

    getItems() {
        return this.cart.slice();
    }


    //get single item
    getItem(productID) {
        return this.cart.find((x) => x.productID === productID && x.isPack === "v");
    }
    getPackage(packageID) {
        return this.cart.find((x) => x.productID === packageID && x.isPack === "p");
    }

    getUserPackage(packageID) {
        return this.cart.find((x) => x.productID === packageID && x.isPack === "u");
    }



    getNumberOfElement() {
        return this.cart.length;
    }

    // removeItem(productID) {
    //     let ind = this.cart.indexOf(this.cart.find((x) => x.productID === productID));
    //     this.cart.splice(ind, 1);
    //     this.onRemoved.next(this.getItems());
    // }


}