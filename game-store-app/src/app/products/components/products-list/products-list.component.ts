import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "@app/services/products.service";
import {Subscription} from "rxjs";
import {IBusiness, IProductItemDto, IProducts, ITags} from "@app/services/interficies";
import {TagsService} from "@app/services/tags.service";
import {BusinessService} from "@app/services/business.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  items: IProductItemDto[] = [];
  items$: Subscription | undefined;
  tags: ITags[] = [];
  tags$: Subscription | undefined;
  business!: IBusiness;
  business$: Subscription | undefined;
  tagList: string[] = [];
  filter: string = '';
  searchProduct: string = '';

  constructor(private readonly service: ProductsService,
              private tagService: TagsService,
              private businessService: BusinessService) {
  }

  ngOnInit(): void {
    this.items$ = this.service.getProductItemsDto().subscribe((response: IProductItemDto[]) => {
      this.items = response;
    });
    this.tags$ = this.tagService.getAllTag()
      .subscribe((response: ITags[]) => {
        this.tags = response;
      });
  }

  getBusiness(product: IProducts): void {
    this.business$ = this.businessService.get(product.businessId).subscribe((response) => {
      this.business = response;
    })
  }

  ngOnDestroy() {
    if (!this.items$) {
      return;
    }
    (this.items$ as Subscription).unsubscribe();
    if (!this.tags$) {
      return;
    }
    (this.tags$ as Subscription).unsubscribe();
    if (!this.business$) {
      return;
    }
    (this.business$ as Subscription).unsubscribe()
  }

  getFilteredProducts(): IProductItemDto[] {
    return this.filter === ''
      ? this.items
      : this.items.filter((item) => item.product.tags.includes(this.filter));
  }

  getProductsBySearch() {
    this.service.getProductsByRegex(this.searchProduct).subscribe((response: IProductItemDto[]) => {
      this.items = response;
    });
  }
}
