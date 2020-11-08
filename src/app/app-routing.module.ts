import {  } from 'src/database/dtbase';


import { AddProductsComponent } from './add-products/add-products.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'products', component:ProductsComponent},
  {path:'add-products', component:AddProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent,ProductsComponent,AddProductsComponent]
