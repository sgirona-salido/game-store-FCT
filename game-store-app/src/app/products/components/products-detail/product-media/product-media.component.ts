import {Component, Input} from '@angular/core';
import {IProducts} from "@app/services/interficies";
import {UrlSanitizerService} from "@app/services/url-sanitizer.service";
import {MediaUtils} from "@app/utils/media.utils";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-product-media',
  templateUrl: './product-media.component.html'
})
export class ProductMediaComponent {

  @Input() product!: IProducts;
  readonly MediaUtils = MediaUtils;
  slideIndex = 0;

  constructor(private urlSanitizer: UrlSanitizerService) {
  }

  getYouTubeEmbedUrl(link: string): SafeUrl {
    return this.urlSanitizer.getYouTubeEmbedUrl(link);
  }

  prevSlide() {
    this.showSlides(this.slideIndex -= 1);
  }

  nextSlide() {
    this.showSlides(this.slideIndex += 1);
  }

  showSlides(index: number) {
    const slides = document.querySelectorAll('.slideshow-slide');
    if (index >= slides.length) {
      this.slideIndex = 0
    }
    if (index < 0) {
      this.slideIndex = slides.length-1
    }
    slides.forEach((slide) => {
      slide.setAttribute('style', 'display: none;');
    });
    slides[this.slideIndex].setAttribute('style', 'display: block;');
  }
}
