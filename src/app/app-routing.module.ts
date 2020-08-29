import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './shared/contact/contact.component';
import {UsersComponent} from './users/users.component';
import {SubjectsTestingComponent} from './subjects-testing/subjects-testing.component';
import {AboutComponent} from './about/about.component';
import {AuthComponent} from './auth/auth.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AutocompleteComponent} from './shared/autocomplete/autocomplete.component';
import {ModalComponent} from './shared/modal/modal.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {AuthGuard} from './auth/auth.guard';
import {ReassuranceGuard} from './shared/reassurance.guard';
import {WorkApplicationComponent} from './work-application/work-application.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'log-in', component: AuthComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'section1', component: SubjectsTestingComponent},
  {path: 'section2', component: SubjectsTestingComponent},
  {path: 'section3', component: SubjectsTestingComponent},
  {path: 'subjects', component: SubjectsTestingComponent},
  {path: 'working-application', component: WorkApplicationComponent},
  {path: 'autocomplete-testing', component: SearchFormComponent, canActivate: [ReassuranceGuard]},
  {path: 'result', component: ModalComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
