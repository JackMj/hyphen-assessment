import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { AppRoutingModule } from 'app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductDetailsComponent,
    FooterComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
