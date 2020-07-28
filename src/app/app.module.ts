import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module';
import { SubjectsTestingComponent } from './subjects-testing/subjects-testing.component';
import {SubjectsTestingService} from './subjects-testing/subjects-testing.service';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    SharedModule
  ],
  providers: [SubjectsTestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
