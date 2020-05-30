import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-edit-admin',
  templateUrl: './product-edit-admin.component.html',
  styleUrls: ['./product-edit-admin.component.scss']
})
export class ProductEditAdminComponent implements OnInit, OnDestroy {
  productID: string;
  productName: string;
  unitPrice: number;
  minimumOrder: number;
  Availability: boolean;
  imagepreview: string;
  imgSrc;

  editingDisableStatus = true;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService) {

  }



  ngOnInit(): void {
    this.productID = this.route.snapshot.params['id'];

    this.productService.fetchProductFromHttp(this.productID).subscribe((recProduct) => {
      let product = recProduct;
      console.log(product);
      this.productName = product.productName;
      this.unitPrice = product.unitPrice;
      this.minimumOrder = product.minimumOrder;
      this.Availability = product.availability;
      this.imgSrc = product.imgSrc;
      this.imagepreview = product.imgSrc;
    });
  }


  onChangeAvailability() {
    this.Availability = !this.Availability;

  }
  // onChangeImg(){
  //   this.imagepreview=this.imgSrc;
  // }

  
  //productImage;
  onImgUploadClick(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgSrc = event.target.result;
       // console.log(this.imgSrc);
      }
    }
  }

  onImgSave(){
    console.log(this.imgSrc);
    this.productService.updateProductImg(this.productID, this.imgSrc).subscribe((x) => {
      this.router.navigate(['admin', 'productsadmin']);
    });
  }


  onUpdateClick() {
    this.productService.updateSpecificProduct(this.productID, {
      productName: this.productName,
      unitPrice: this.unitPrice,
      minimumOrder: this.minimumOrder,
      availability: this.Availability,
      imgSrc: this.imgSrc
    }).subscribe((x) => {
      this.router.navigate(['admin', 'productsadmin']);
    });


  }
  onCancelClick() {
    this.router.navigate(['admin', 'productsadmin']);
  }

  onClickEnableEditing() {
    this.editingDisableStatus = false;
  }

  ngOnDestroy(): void {
    // this.productService.updateSpecificProduct(this.productID,{
    //   productName:this.productName,
    //   unitPrice:this.unitPrice,
    //   minimumOrder:this.minimumOrder,
    //   availability:this.Availability,
    //   imgSrc :this.imgSrc
    // }).subscribe((x)=>{
    //   console.log(x);
    // });
  }

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event) {
    $event.returnValue = "Are you sure?";
  }




}
