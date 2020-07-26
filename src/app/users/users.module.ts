import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UsersComponent} from './users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
