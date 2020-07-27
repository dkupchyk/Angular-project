import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UsersComponent} from './users.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
