import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IProducts, IVideo} from "@app/services/interficies";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {
  adminURL = '/api/admin/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.adminURL);
  }

  saveProduct(product: IVideo) {
    return this.http.post<IVideo>(`${this.adminURL}/videogame`, product)
  }

  delete(id: string) {
    return this.http.delete(`${this.adminURL}/${id}`)
  }
}
