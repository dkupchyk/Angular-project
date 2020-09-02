import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './shared/contact/contact.component';
import {UsersComponent} from './users/users.component';
import {AboutComponent} from './about/about.component';
import {ModalComponent} from './shared/modal/modal.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {AuthGuard} from './auth/auth.guard';
import {ReassuranceGuard} from './shared/reassurance.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'subject-testing',
    loadChildren: () => import('./subjects-testing/subject-testing.module').then(m => m.SubjectTestingModule)
  },
  {
    path: 'working-application',
    loadChildren: () => import('./work-application/working-application.module').then(m => m.WorkingApplicationModule)
  },
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
