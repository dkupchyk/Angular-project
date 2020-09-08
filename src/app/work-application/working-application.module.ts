import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {WorkApplicationComponent} from './work-application.component';
import {WorkingApplicationRoutingModule} from './working-application-routing.module';

@NgModule({
  declarations: [
    WorkApplicationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    WorkingApplicationRoutingModule
  ],
  providers: [],
})
export class WorkingApplicationModule { }
