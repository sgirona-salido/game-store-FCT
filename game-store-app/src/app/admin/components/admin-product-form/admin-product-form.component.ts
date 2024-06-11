import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBusiness, IVideo} from "@app/services/interficies";
import {Observable} from "rxjs";
import {BusinessService} from "@app/services/business.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "@app/services/products.service";
import {AdminProductsService} from "@app/services/admin-products.service";

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html'
})
export class AdminProductFormComponent implements OnInit, OnDestroy {
  business$: Observable<IBusiness[]> | undefined;
  productData?: IVideo;

  productVideogameForm = this.formBuilder.group({
    id: <string | null>null,
    name: '',
    description: '',
    tags: [['1']],
    businessId: '',
    officialWebsite: '',
    price: 0,
    productImage: '',
    sourceList: this.formBuilder.array(['']),
    releaseDate: <Date | null>null,
    productCover: '',
    minPlayers: 0,
    maxPlayers: 0,
    platforms: [['']],
    digital: false,
    physical: false
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private businessService: BusinessService,
              private productService: ProductsService,
              private adminProductService: AdminProductsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;

    this.business$ = this.businessService.list();
    this.loadProduct(contactId)
  }

  ngOnDestroy(): void {
  }

  get mediaFormArray(): FormArray {
    return this.productVideogameForm.get("sourceList") as FormArray
  }

  addMediaLink(value: string = ''): void {
    this.mediaFormArray.push(new FormControl(value));
  }

  saveProduct() {
    this.productData = <IVideo>this.productVideogameForm.value;
    this.adminProductService.saveProduct(this.productData).subscribe((product) => {
      this.router.navigate([`/products/${product.id}`]);
    });
  }

  deleteMediaItem(index: number): void {
    this.mediaFormArray.controls.splice(index, 1);
  }

  loadProduct(contactId: string) {
    this.productService.getProductById(contactId).subscribe((product) => {
      if (!product) return;

      this.productVideogameForm.patchValue(product);
      product.sourceList.forEach((link: string) => {
        this.addMediaLink(link);
      });

      this.productVideogameForm.updateValueAndValidity();
    });
  }
}
