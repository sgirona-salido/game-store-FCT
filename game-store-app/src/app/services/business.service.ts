import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBusiness} from "./interficies";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  URL = '/api/business';

  constructor(private http: HttpClient) {
  }

  get(businessId: string): Observable<IBusiness> {
    return this.http.get<IBusiness>(`${this.URL}/${businessId}`);
  }

  list(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(`${this.URL}`);
  }
}
