import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './shared/contact/contact.component';
import {UsersComponent} from './users/users.component';
import {SubjectsTestingComponent} from './subjects-testing/subjects-testing.component';
import {AboutComponent} from './about/about.component';
import {AuthComponent} from './auth/auth.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'users', component: UsersComponent},
  {path: 'log-in', component: AuthComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'section1', component: SubjectsTestingComponent},
  {path: 'section2', component: SubjectsTestingComponent},
  {path: 'section3', component: SubjectsTestingComponent},
  {path: 'subjects', component: SubjectsTestingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
