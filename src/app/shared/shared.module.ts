import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {OtherComponent} from './other/other.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {SanitizeUrlPipe} from './pipes/sanitize-url.pipe';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchFilterPipe} from './pipes/search-filter.pipe';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import {ItemsStyleDirective} from './autocomplete/items-style.directive';
import {InvalidFormInputComponent} from './invalid-form-input/invalid-form-input.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    OtherComponent,
    ContactComponent,
    AutocompleteComponent,
    SanitizeUrlPipe,
    SearchFilterPipe,
    ModalComponent,
    ItemsStyleDirective,
    InvalidFormInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    OtherComponent,
    ContactComponent,
    SanitizeUrlPipe,
    SearchFilterPipe,
    AutocompleteComponent,
    InvalidFormInputComponent,
    ItemsStyleDirective
  ],
  providers: [ModalService]
})
export class SharedModule {
}
