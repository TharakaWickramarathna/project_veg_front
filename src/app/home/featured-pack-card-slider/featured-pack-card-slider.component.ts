import { PackagesService } from 'src/app/shared/services/packages.service';
import { Packages } from './../../shared/packages.model';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-pack-card-slider',
  templateUrl: './featured-pack-card-slider.component.html',
  styleUrls: ['./featured-pack-card-slider.component.scss']
})
export class FeaturedPackCardSliderComponent implements OnInit {

  size :any = "col-md-3 pb-2";

  innerWidth:any;
  x:any;

  onc = false;
  
  title = 'ggg';
  cards : Packages[];

  constructor(private router :Router,
              private packageService:PackagesService){
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

    this.packageService.getProductsFromHttp().subscribe((packages)=>{
      this.cards = packages;

      this.innerWidth = 
      window.innerWidth;
  
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
    //this.cards = this.packageService.getProducts();
    
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
  this.router.navigate(['/featuredpacks']);
}

}
