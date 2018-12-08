import { AddProductComponent } from './UI/product/add-product/add-product.component';
import { AuthComponent } from './UI/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './UI/product/product.component';
import { ProductDetailsComponent } from './UI/product/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: AddProductComponent },
  { path: 'auth', component: AddProductComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
