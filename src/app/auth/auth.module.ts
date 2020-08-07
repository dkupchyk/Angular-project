import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {AuthComponent} from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule
    ],
  exports: [
    AuthComponent,
    SignUpComponent
  ],
  providers: []
})
export class AuthModule {
}
