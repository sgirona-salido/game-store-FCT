import { Component } from '@angular/core';
import {LoginService} from "@app/services/login.service";
import {FormBuilder} from "@angular/forms";
import {ILoginInfo} from "@app/services/interficies";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss'
})
export class LoginAdminComponent {
  loginInfo?: ILoginInfo;
  constructor(private loginService : LoginService,
              private formBuilder: FormBuilder) {
  }

  loginData = this.formBuilder.group({
    username:'',
    password:''
  });

  getAuthorizationCode() {
    this.loginInfo = <ILoginInfo>this.loginData.value;
    console.log(this.loginInfo)
    this.loginService.getAuthCode(this.loginInfo.username, this.loginInfo.password).subscribe((response:string)=>{
      console.log(response)
    });
  }
}
