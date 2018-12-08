import { AuthComponent } from './UI/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './UI/product/product.component';
import { ProductDetailsComponent } from './UI/product/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
