import { Products } from '../products.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductsService{

    productsChanged = new Subject<Products[]>();

    private products :Products[]= [
            new Products('001','Carrot',60,200,'vegetable',true,'https://image.freepik.com/free-photo/bunch-fresh-carrots-white-background_52720-62.jpg'),
            new Products('002','Beet root',70,200,'vegetable',true,'https://images.assetsdelivery.com/compings_v2/buriy/buriy1408/buriy140800037.jpg'),
            new Products('003','Brinjol',90,200,'vegetable',true,'https://img.freepik.com/free-photo/heap-small-eggplant-aubergine_80013-2013.jpg?size=626&ext=jpg'),
            new Products('004','Cabbage',75,200,'vegetable',true,'https://image.freepik.com/free-photo/ripe-sliced-cabbage-isolated-white-background_80510-746.jpg'),
            new Products('005','Green onion',100,200,'vegetable',true,'https://image.freepik.com/free-photo/spring-onions-white-background_62856-1393.jpg'),
            new Products('006','Chillie',95,200,'vegetable',true,'https://image.freepik.com/free-photo/green-chili-white-background_44868-107.jpg'),
            new Products('007','Snake Gourd',70,200,'vegetable',true,'https://www.onlyfoods.net/wp-content/uploads/2017/03/Snake-Gourd.jpg'),
            new Products('008','Bitter Gourd',85,200,'vegetable',true,'https://image.freepik.com/free-photo/bitter-melon-bitter-gourd-white-background_35378-1252.jpg'),
            new Products('009','Sweet Potato',70,200,'vegetable',true,'https://img.freepik.com/free-photo/sweet-potato-isolated-white-background_70287-1929.jpg?size=626&ext=jpg'),
            new Products('010','Ladies Fingers',60,200,'vegetable',true,'https://radhinaturalhealth.files.wordpress.com/2015/04/okra-diabetes.jpg'),
        
    ];

    constructor(){}


    getProducts(){
        return this.products.slice();
    }

    
    getProduct(aa:any){
       return this.products.find((product)=>aa===product.productID);
    }

    setProducts(products:Products[]){
        this.products=products;
        console.log(this.products);
        this.productsChanged.next(this.products.slice());
    }
    

}