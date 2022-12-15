import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  },
  {
    path: 'shop/search/:id/page/:page', component: SearchComponent, data: { title: 'Search Result' }
  },
  {
    path: 'shop/search/:id', redirectTo: 'shop/search/:id/page/1'
  },
  {
    path: 'shop/product/:category/:id', component: ProductComponent
  },
  {
    path: 'shop/products/page/:page', component: ProductsComponent, data: { title: 'Products' }
  },
  {
    path: 'shop/products', redirectTo: 'shop/products/page/1'
  },
  {
    path: 'shop/category/:category/page/:page', component: CategoryComponent, data: { title: 'Products By Category' }
  },
  {
    path: 'shop/category/:category', redirectTo: 'shop/category/:category/page/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
