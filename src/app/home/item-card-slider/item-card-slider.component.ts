import { Component, OnInit, HostListener } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/shared/products.models';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-item-card-slider',
  templateUrl: './item-card-slider.component.html',
  styleUrls: ['./item-card-slider.component.scss']
 
})
export class ItemCardSliderComponent implements OnInit {


  





  cards : Products[];

  size :any = "col-md-3 pb-2";
  innerWidth:any;
  x:any;

  onc = false;


  constructor(private router :Router,
              private productService:ProductsService){
              }

  

  
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {

    //get products from product service
    this.productService.fetchProductsFromHttp().subscribe((products)=>{
      this.cards=products;

      if(this.innerWidth<575){
        this.slides = this.chunk(this.cards, 1);
        this.onc=true;
      }
      if(this.innerWidth>=575 && this.innerWidth<768){
        this.slides = this.chunk(this.cards, 2);
        this.onc=false;
      }
      if(this.innerWidth>=768){
        this.slides = this.chunk(this.cards, 4);
        this.onc=false;
      }
    });


    this.innerWidth = window.innerWidth;

    
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  this.x = innerWidth+200;

  if(this.innerWidth<575){
    this.slides = this.chunk(this.cards, 1);
    this.onc=true;
  }
  if(this.innerWidth>=575 && this.innerWidth<768){
    this.slides = this.chunk(this.cards, 2);
    this.onc=false;
  }
  if(this.innerWidth>=768){
    this.slides = this.chunk(this.cards, 4);
    this.onc=false;
  }
}


//navigate to all products by clicking on view more
onViewMoreClicked(){
  this.router.navigate(['/allproducts']);
}




}
