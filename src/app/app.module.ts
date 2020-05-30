import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ContantUsComponent } from './contant-us/contant-us.component';
import { FeaturedPackComponent } from './featured-pack/featured-pack.component';
import { BannerSliderComponent } from './home/banner-slider/banner-slider.component';
import { ItemCardSliderComponent } from './home/item-card-slider/item-card-slider.component';
import { FeaturedPackCardSliderComponent } from './home/featured-pack-card-slider/featured-pack-card-slider.component';
import { ProductPopupModalComponent } from './all-products/product-popup-modal/product-popup-modal.component';
import { CartComponent } from './cart/cart.component';
import { FloatBtnComponent } from './home/float-btn/float-btn.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';  
import { ProductsService } from './shared/services/products.service';
import { CartService } from './shared/services/cart.service';
import { PackagesService } from './shared/services/packages.service';
import { PackPopupModalComponent } from './featured-pack/pack-popup-modal/pack-popup-modal.component';
import { PackageDescriptionService } from './shared/services/package-description.service';
import { UserPackComponent } from './user-pack/user-pack.component';
import { UserPackListComponent } from './user-pack/user-pack-list/user-pack-list.component';
import { UserPackDetailsComponent } from './user-pack/user-pack-details/user-pack-details.component';
import { UserPackEditComponent } from './user-pack/user-pack-edit/user-pack-edit.component';
import { UserPackCreateNewComponent } from './user-pack/user-pack-create-new/user-pack-create-new.component';
import { PackageDescriptionPipePipe } from './shared/pipes/package-description-pipe.pipe';
import { PackageItemNamingPipePipe } from './shared/pipes/package-item-naming-pipe.pipe';
import { ViewPopUpModelComponent } from './user-pack/view-pop-up-model/view-pop-up-model/view-pop-up-model.component';
import { PackageItemImagePipePipe } from './shared/pipes/package-item-image-pipe.pipe';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';



import { NgModule} from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CartQuantityAndWeightPipePipe } from './shared/pipes/cart-quantity-and-weight-pipe.pipe';
import { SignInPopupModalComponent } from './signIn-signUp/signIn-popup-modal/sign-in-popup-modal/sign-in-popup-modal.component';
import { SignUpPopupModalComponent } from './signIn-signUp/signUp-popup-modal/sign-up-popup-modal/sign-up-popup-modal.component';
import { OrderConfirmPopupModalComponent } from './cart/oderConfirm-popup-modal/order-confirm-popup-modal/order-confirm-popup-modal.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PackageItemTotalPricePerItemPipePipe } from './shared/pipes/package-item-total-price-per-item-pipe.pipe'; 
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FeaturedpackAdminComponent } from './admin/featuredpack-admin/featuredpack-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductListAdminComponent } from './admin/products-admin/product-list-admin/product-list-admin.component';
import { ProductEditAdminComponent } from './admin/products-admin/product-edit-admin/product-edit-admin.component';
import { FeaturedpackListAdminComponent } from './admin/featuredpack-admin/featuredpack-list-admin/featuredpack-list-admin.component';
import { FeaturedpackEditAdminComponent } from './admin/featuredpack-admin/featuredpack-edit-admin/featuredpack-edit-admin.component';
import { FeaturedpackCreateAdminComponent } from './admin/featuredpack-admin/featuredpack-create-admin/featuredpack-create-admin.component';

// import auth servie class(T)
import {AuthService} from './admin/shared/services/auth.service';
import { ProductCreateAdminComponent } from './admin/products-admin/product-create-admin/product-create-admin.component';
import { PendingOrdersAdminComponent } from './admin/orders/pending-orders-admin/pending-orders-admin.component';
import { PreparingOrdersAdminComponent } from './admin/orders/preparing-orders-admin/preparing-orders-admin.component';
import { DeliveringOrdersAdminComponent } from './admin/orders/delivering-orders-admin/delivering-orders-admin.component';


//import {MMatAutocompleteModule,MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllProductsComponent,
    ContantUsComponent,
    FeaturedPackComponent,
    BannerSliderComponent,
    ItemCardSliderComponent,
    FeaturedPackCardSliderComponent,
    ProductPopupModalComponent,
    CartComponent,
    FloatBtnComponent,
    PackPopupModalComponent,
    UserPackComponent,
    UserPackListComponent,
    UserPackDetailsComponent,
    UserPackEditComponent,
    UserPackCreateNewComponent,
    PackageDescriptionPipePipe,
    PackageItemNamingPipePipe,
    ViewPopUpModelComponent,
    PackageItemImagePipePipe,
    AdminComponent,
    OrdersComponent,
    ProductsAdminComponent,
    CartQuantityAndWeightPipePipe,
    SignInPopupModalComponent,
    SignUpPopupModalComponent,
    OrderConfirmPopupModalComponent,
    FooterComponent,
    PackageItemTotalPricePerItemPipePipe,
    MyOrdersComponent,
    FeaturedpackAdminComponent,
    DashboardComponent,
    UsersComponent,
    ProductListAdminComponent,
    ProductEditAdminComponent,
    FeaturedpackListAdminComponent,
    FeaturedpackEditAdminComponent,
    FeaturedpackCreateAdminComponent,
    ProductCreateAdminComponent,
    PendingOrdersAdminComponent,
    PreparingOrdersAdminComponent,
    DeliveringOrdersAdminComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
    
    
  ],
  entryComponents:[ProductPopupModalComponent],
  providers: [ProductsService,CartService,PackagesService,PackageDescriptionService, AuthService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
