import { FeaturedpackCreateAdminComponent } from './admin/featuredpack-admin/featuredpack-create-admin/featuredpack-create-admin.component';
import { FeaturedpackEditAdminComponent } from './admin/featuredpack-admin/featuredpack-edit-admin/featuredpack-edit-admin.component';
import { FeaturedpackListAdminComponent } from './admin/featuredpack-admin/featuredpack-list-admin/featuredpack-list-admin.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FeaturedPackComponent } from './featured-pack/featured-pack.component';
import { ContantUsComponent } from './contant-us/contant-us.component';
import { UserPackComponent } from './user-pack/user-pack.component';
import { UserPackListComponent } from './user-pack/user-pack-list/user-pack-list.component';
import { UserPackDetailsComponent } from './user-pack/user-pack-details/user-pack-details.component';
import { UserPackEditComponent } from './user-pack/user-pack-edit/user-pack-edit.component';
import { UserPackCreateNewComponent } from './user-pack/user-pack-create-new/user-pack-create-new.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { FeaturedpackAdminComponent } from './admin/featuredpack-admin/featuredpack-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductListAdminComponent } from './admin/products-admin/product-list-admin/product-list-admin.component';
import { ProductEditAdminComponent } from './admin/products-admin/product-edit-admin/product-edit-admin.component';
import { ProductCreateAdminComponent } from './admin/products-admin/product-create-admin/product-create-admin.component';
import { PendingOrdersAdminComponent } from './admin/orders/pending-orders-admin/pending-orders-admin.component';
import { PreparingOrdersAdminComponent } from './admin/orders/preparing-orders-admin/preparing-orders-admin.component';
import { DeliveringOrdersAdminComponent } from './admin/orders/delivering-orders-admin/delivering-orders-admin.component';
import { PendingOrdersComponent } from './my-orders/pending-orders/pending-orders.component';
import { PreparingOrdersComponent } from './my-orders/preparing-orders/preparing-orders.component';
import { DeliveringOrdersComponent } from './my-orders/delivering-orders/delivering-orders.component';
import { OrderPreviewComponent } from './admin/orders/order-preview/order-preview.component';
import { CompletedOrdersAdminComponent } from './admin/orders/completed-orders-admin/completed-orders-admin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'featuredpacks',component:FeaturedPackComponent},
  {path:'contactus',component:ContantUsComponent},
  {path:'cartview',component:CartComponent},
  {path: 'myorders',component:MyOrdersComponent,children:[
    {path:'',redirectTo:'pending',pathMatch:'full'},
    {path:'pending',component:PendingOrdersComponent},
    {path:'preparing',component:PreparingOrdersComponent},
    {path:'delivering',component:DeliveringOrdersComponent},
  ]},
  {path: 'userpacks',component:UserPackComponent ,children:[
    {path:'',redirectTo:'userpacklist',pathMatch:'full'},
    {path:'userpacklist',component:UserPackListComponent},
    {path:':id/viewuserpack',component:UserPackDetailsComponent},
    {path:':id/editpack',component:UserPackEditComponent},
    {path:'create',component:UserPackCreateNewComponent}]},

  {path:'admin' , component:AdminComponent,children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'orders',component:OrdersComponent,children:[
      {path:'',redirectTo:'pending',pathMatch:'full'},
      {path:'pending',component:PendingOrdersAdminComponent},
      {path:'preparing',component:PreparingOrdersAdminComponent},
      {path:"delivering",component:DeliveringOrdersAdminComponent},
      {path:"completed",component:CompletedOrdersAdminComponent},
      {path:':id/:status',component:OrderPreviewComponent}
    ]},
    {path:'productsadmin',children:[
      {path:'',component:ProductListAdminComponent},
      {path:':id/editproduct',component:ProductEditAdminComponent},
      {path:'createproduct',component:ProductCreateAdminComponent},
    ]},

    {path:'dashboard',component:DashboardComponent},

    {path:'featuredpacksadmin',children:[

      {path:'',component:FeaturedpackListAdminComponent},
      {path:'createpack', component:FeaturedpackCreateAdminComponent},
      {path:':id/editPack', component:FeaturedpackEditAdminComponent}
    ]},

    {path:'users',component:UsersComponent},
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
