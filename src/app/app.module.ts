import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module';
import { SubjectsTestingComponent } from './subjects-testing/subjects-testing.component';
import {SubjectsTestingService} from './subjects-testing/subjects-testing.service';
import {SectionService} from './section/section.service';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {AuthModule} from './auth/auth.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsTestingComponent,
    AboutComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    SharedModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [SubjectsTestingService, SectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
