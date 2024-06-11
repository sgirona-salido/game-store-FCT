import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsDetailComponent} from "./products/components/products-detail/products-detail.component";
import {ProductsListComponent} from "./products/components/products-list/products-list.component";
import {BusinessComponent} from "./business/business.component";
import {AdminProductFormComponent} from "@app/admin/components/admin-product-form/admin-product-form.component";
import {AdminProductListComponent} from "@app/admin/components/admin-product-list/admin-product-list.component";
import {CodeReciverComponent} from "@app/login/components/code-reciver/code-reciver.component";
import {LoginAdminComponent} from "@app/login/components/login-admin/login-admin.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent },
  {path: 'products', component: ProductsListComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'admin/products', component: AdminProductListComponent},
  {path: 'admin/products/:id', component: AdminProductFormComponent},
  {path: 'admin/products/create', component: AdminProductFormComponent},
  {path: 'authorized', component: CodeReciverComponent},
  {path: 'log-in', component: LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
