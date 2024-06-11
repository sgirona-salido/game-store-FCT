import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProductItemDto, IProducts} from "./interficies";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = '/api/products';

  constructor(private http: HttpClient) {
  }

  getProductById(id: string): Observable<IProducts> {
    return this.http.get<IProducts>(this.URL + "/" + id);
  }

  getProductsByRegex(name: string): Observable<IProductItemDto[]> {
    return this.http.get<IProductItemDto[]>(`${this.URL}/name/${name}`)
  }

  getProductItemsDto(): Observable<IProductItemDto[]> {
    return this.http.get<IProductItemDto[]>(`${this.URL}/items`)
  }
}
