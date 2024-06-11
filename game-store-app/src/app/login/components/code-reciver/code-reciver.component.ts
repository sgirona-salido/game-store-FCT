import {Component, OnInit} from '@angular/core';
import {LoginService} from "@app/services/login.service";
import {AuthorizationKeys, ITokenResponse} from "@app/services/interficies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-code-reciver',
  templateUrl: './code-reciver.component.html',
})
export class CodeReciverComponent  implements OnInit{
  authorization_code: string = '';
  constructor(private loginService: LoginService, private router : Router) {
  }
  ngOnInit(): void {
    this.authorization_code = this.getCodeFromUrl();
    this.loginService.sendRequestWithBasicAuth(this.authorization_code).subscribe((response:ITokenResponse)=>{
      window.localStorage.setItem(AuthorizationKeys.access_token, response.access_token)
      window.localStorage.setItem(AuthorizationKeys.code, this.authorization_code)
      this.router.navigate(['admin/products'])
    });
  }
  getCodeFromUrl(): string{
    const urlParams = window.location.search.substring(1).split(new RegExp('[=,&]'));
    return urlParams[urlParams.indexOf('code')+1];
  }
}
