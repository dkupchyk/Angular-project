import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectsTestingComponent} from './subjects-testing.component';
import {SubjectsTestingService} from './subjects-testing.service';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SubjectTestingRoutingModule} from './subject-testing-routing.module';

@NgModule({
  declarations: [
    SubjectsTestingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SubjectTestingRoutingModule
  ],
  providers: [SubjectsTestingService],
})
export class SubjectTestingModule { }
