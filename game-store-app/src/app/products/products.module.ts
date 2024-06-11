import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import {RouterLink} from "@angular/router";
import { ProductItemComponent } from './components/products-list/product-item/product-item.component';
import { ProductMediaComponent } from '@app/products/components/products-detail/product-media/product-media.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailComponent,
    ProductItemComponent,
    ProductMediaComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    FormsModule
  ]
})
export class ProductsModule { }
