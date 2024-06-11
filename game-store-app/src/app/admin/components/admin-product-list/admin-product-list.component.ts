import {Component, OnInit} from '@angular/core';
import {IProducts} from "@app/services/interficies";
import {Subscription} from "rxjs";
import {AdminProductsService} from "@app/services/admin-products.service";

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html'
})
export class AdminProductListComponent implements OnInit {
  products$: Subscription | undefined;
  products: IProducts[] = []

  constructor(private productsService: AdminProductsService) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts().subscribe((response: IProducts[]) => {
      this.products = response;
    });
  }

  deleteProduct(listId: number, productId: string) {
    this.productsService.delete(productId).subscribe();
    this.products.splice(listId, 1)
  }
}
