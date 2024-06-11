import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeReciverComponent } from './components/code-reciver/code-reciver.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CodeReciverComponent,
    LoginAdminComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
