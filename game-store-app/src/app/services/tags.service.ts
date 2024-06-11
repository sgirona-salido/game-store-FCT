import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ITags} from "./interficies";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  URL = '/api/tags';

  constructor(private http: HttpClient) {
  }


  getAllTag():Observable<ITags[]>{
    return this.http.get<ITags[]>(this.URL);
  }

  getTagTypeById(tagsIds : string[]): Observable<ITags[]> {
    return this.http.get<ITags[]>(`${this.URL}/`, { params: new HttpParams().set('ids', tagsIds.join(',')) });
    //return this.http.get<ITags[]>(`${this.URL}/ids/${tagsIds}`);
  }
}
