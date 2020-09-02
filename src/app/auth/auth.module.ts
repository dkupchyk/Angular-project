import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {AuthComponent} from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from './auth.service';
import {NameSectionComponent} from './sign-up/stepper/name-section/name-section.component';
import {BirthdaySectionComponent} from './sign-up/stepper/birthday-section/birthday-section.component';
import {EmailPasswordSectionComponent} from './sign-up/stepper/email-password-section/email-password-section.component';
import {AuthRoutingModule} from './auth-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    NameSectionComponent,
    BirthdaySectionComponent,
    EmailPasswordSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent,
    SignUpComponent
  ],
  providers: [AuthService]
})
export class AuthModule {
}
