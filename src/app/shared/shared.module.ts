import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {OtherComponent} from './other/other.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OtherComponent,
    ContactComponent,
    SanitizeUrlPipe,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    OtherComponent,
    ContactComponent,
    SanitizeUrlPipe
  ],
  providers: []
})
export class SharedModule {
}
