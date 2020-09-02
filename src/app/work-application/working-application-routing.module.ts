import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkApplicationComponent} from './work-application.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WorkApplicationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class WorkingApplicationRoutingModule {
}



