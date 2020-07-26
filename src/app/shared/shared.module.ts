import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {OtherComponent} from './other/other.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    OtherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    OtherComponent,
    ContactComponent
  ],
  providers: []
})
export class SharedModule {
}
