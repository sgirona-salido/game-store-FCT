import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthorizationKeys} from "@app/services/interficies";

export class AuthInterceptor implements HttpInterceptor {
  loginUrl : string = '/oauth2/token';
  code_url :string = '/login';
  adminUrl : string = '/api/admin'
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(this.loginUrl) || request.url.includes(this.code_url)) {
      return next.handle(request); // Skip adding the Authorization header
    }
    else if(request.url.includes(this.adminUrl)){
      const access_token = window.localStorage.getItem(AuthorizationKeys.access_token);
      const modifiedRequest = request.clone({ setHeaders: { Authorization: 'Bearer '+ access_token } });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
