import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from "./products/products.module";
import {AdminModule} from "@app/admin/admin.module";
import { BusinessComponent } from './business/business.component';
import {LoginModule} from "@app/login/login.module";
import {AuthInterceptor} from "@app/interceptors/auth.interceptor";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppMenuComponent } from './app-navbar/app-menu/app-menu.component';
import {NgOptimizedImage} from "@angular/common";
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    AppNavbarComponent,
    AppMenuComponent,
    AppFooterComponent
  ],
  imports: [
    ProductsModule,
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    NgOptimizedImage
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
