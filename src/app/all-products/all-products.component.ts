import { Component, OnInit, Output,EventEmitter,HostListener } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ProductPopupModalComponent } from './product-popup-modal/product-popup-modal.component';
import { ProductsService } from '../shared/services/products.service';
import { Products } from '../shared/products.models';
import { DataStorageService } from '../shared/services/data-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  
})
export class AllProductsComponent implements OnInit {
  
  cards:Products[];

  pp='';
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService,
              private productService:ProductsService,
              private http:HttpClient ) {
               }

  size :any = "col-md-3 pb-2";

  innerWidth:any;
  x:any;

  onc = false;

    openModal(productID,productName,unitPrice,imgSrc) {
      this.modalRef = this.modalService.show(ProductPopupModalComponent, { 
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class:'modal-dialog modal-md',
        containerClass: 'modal fade bottom',
        role:'document',
        animated: true,
        data: {
            heading: 'Add to cart Confirmation',
            content: { heading: 'Content heading', description: 'Content description',productID:productID,productName:productName,unitPrice:unitPrice,imgSrc:imgSrc}
        } });
  
        this.modalRef.content.action.subscribe( (result: any) => { console.log(result) });
  
    }


  
    ngOnInit() {

      this.productService.fetchProductsFromHttp().subscribe((products)=>{
        this.cards=products;
      });
      

      //get products from product service
    
      this.modalService.open.subscribe(() => console.log('open'));
      this.modalService.opened.subscribe(() => console.log('opened'));
      this.modalService.close.subscribe(() => console.log('close'));
      this.modalService.closed.subscribe(() => console.log('closed'));



    }

    

  
 
  
  


    


}
