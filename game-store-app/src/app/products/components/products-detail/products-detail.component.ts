import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBusiness, IProducts, ITags} from "@app/services/interficies";
import {ProductsService} from "@app/services/products.service";
import {TagsService} from "@app/services/tags.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BusinessService} from "@app/services/business.service";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html'
})
export class ProductsDetailComponent implements OnInit, OnDestroy {
  product$: Subscription | undefined;
  tags$: Subscription | undefined;
  business$: Subscription | undefined;
  product!: IProducts;
  tags: ITags[] = [];
  business?: IBusiness;
  defaultImage : string = 'https://placehold.co/260x350';

  constructor(
    private readonly productService: ProductsService,
    private readonly tagService: TagsService,
    private readonly businessService: BusinessService,
    private readonly router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product$ = this.productService
      .getProductById(this.getIdFromUrl())
      .subscribe((response: IProducts) => {
        this.product = response;
        this.getTagsFromProduct(response);
        this.getBusinessFromProduct(response)
      });
  }

  private getTagsFromProduct(product: IProducts): void {
    this.tags$ = this.tagService.getTagTypeById(product.tags)
      .subscribe((response: ITags[]) => {
        this.tags = response;
      });
  }

  private getBusinessFromProduct(product: IProducts): void{
    this.business$ = this.businessService.get(product.businessId)
      .subscribe((response:IBusiness) => {
        this.business = response
      })
  }

  ngOnDestroy() {
    if (!this.product$) {
      return;
    }
    (this.product$ as Subscription).unsubscribe();

    if (!this.tags$) {
      return;
    }
    (this.tags$ as Subscription).unsubscribe();

    if (!this.business$) {
      return;
    }
    (this.business$ as Subscription).unsubscribe();
  }

  getIdFromUrl(): string {
    return this.router.snapshot.params['id'];
  }

  setImatge() {
    this.product.productImage = this.defaultImage;
  }
}
