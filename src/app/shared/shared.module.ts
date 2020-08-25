import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {OtherComponent} from './other/other.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SearchFilterPipe} from './pipes/search-filter.pipe';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal/modal.service';

@NgModule({
  declarations: [
    HeaderComponent,
    OtherComponent,
    ContactComponent,
    AutocompleteComponent,
    SanitizeUrlPipe,
    SearchFilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    OtherComponent,
    ContactComponent,
    SanitizeUrlPipe,
    SearchFilterPipe
  ],
  providers: [ModalService]
})
export class SharedModule {
}
