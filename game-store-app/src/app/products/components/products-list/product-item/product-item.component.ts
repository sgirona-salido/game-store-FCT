import {Component, Input} from '@angular/core';
import {IProductItemDto} from "@app/services/interficies";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {
  defaultImage : string = 'https://placehold.co/150x195'

  @Input() item!: IProductItemDto;

  setImatge(){
    this.item.product.productImage = this.defaultImage;
  }
}
