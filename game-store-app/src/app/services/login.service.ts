import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {ITokenResponse} from "@app/services/interficies";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_Token: string = '/oauth2/token';
  private loginUrl = '/login';

  constructor(private http: HttpClient) { }

  sendRequestWithBasicAuth(code: string): Observable<ITokenResponse> {
    const username = 'client-web';
    const password = '12345';

    const base64Credentials = btoa(username + ':' + password);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credentials
    });

    const formData = new FormData();
    formData.append('code', code);
    formData.append('grant_type', 'authorization_code');
    formData.append('redirect_uri', 'http://localhost:4200/authorized');

    return this.http.post<ITokenResponse>(this.URL_Token, formData, { headers: headers });
  }

  getAuthCode(user:string, passwd:string):Observable<any>{
    const formData = new FormData();
    formData.append('username', user);
    formData.append('password', passwd);

    return this.http.post(this.loginUrl, formData);
  }
}
