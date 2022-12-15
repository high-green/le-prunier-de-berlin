import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScriptService } from './services/script.service';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { ApiService } from './services/api.service';
import { NgtUniversalModule } from '@ng-toolkit/universal'
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-universal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TransferHttpCacheModule } from '@nguniversal/common'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CategoryComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    WishlistComponent,
    SearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    TransferHttpModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ScriptService,
    CartService,
    ApiService,
    TransferHttpService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
