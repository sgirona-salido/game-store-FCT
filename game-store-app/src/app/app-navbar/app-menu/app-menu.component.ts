import {Component} from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {
  links: { label: string, url: string }[] = [
    // { label: "Empreses", url: "/business"},
    { label: "Productes", url: "/products"}
  ]
}
