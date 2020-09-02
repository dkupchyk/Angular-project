import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SubjectsTestingComponent} from './subjects-testing.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'section1',
    pathMatch: 'full'
  },
  {
    path: 'section1',
    component: SubjectsTestingComponent
  },
  {
    path: 'section2',
    component: SubjectsTestingComponent
  },
  {
    path: 'section3',
    component: SubjectsTestingComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class SubjectTestingRoutingModule {
}



