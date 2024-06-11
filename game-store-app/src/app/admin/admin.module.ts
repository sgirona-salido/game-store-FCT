import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AdminProductFormComponent} from '@app/admin/components/admin-product-form/admin-product-form.component';
import {RouterLink} from "@angular/router";
import {AdminProductListComponent} from './components/admin-product-list/admin-product-list.component';


@NgModule({
  declarations: [
    AdminProductFormComponent,
    AdminProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class AdminModule {
}
