import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AutocompleteSettings} from '../shared/interfaces/autocomplete-settings.interface';
import {ModalService} from '../shared/modal/modal.service';
import {ApplicationFormControl} from '../shared/interfaces/application-form-control.interface';
import {EDUCATION_CONTROLS, PERSONAL_INFO_CONTROLS, WORK_EXP_CONTROLS} from './constants/form-controls.constants';
import {EDUCATION_CENTERS, MARITAL_STATUS_OPTIONS, POSITION_OPTIONS, YEARS} from '../shared/constants/work-application-form.constants';

@Component({
  selector: 'app-work-application',
  templateUrl: './work-application.component.html',
  styleUrls: ['./work-application.component.less']
})
export class WorkApplicationComponent implements OnInit {
  applicationForm: FormGroup;
  personalInfoGroup: FormGroup;
  educationGroup: FormGroup;
  workingExperienceGroup: FormGroup;

  maritalStatusOptions = MARITAL_STATUS_OPTIONS;
  positionOptions = POSITION_OPTIONS;
  settings: AutocompleteSettings = {
    placeholder: 'Name',
    symbolsToShow: 1,
    customClass: ''
  };

  educationCenters: string[] = EDUCATION_CENTERS;
  educationCenter: string;
  years: string[] = YEARS;

  resultArray: { title: string, value: any }[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = this.formBuilder.group({
      personalInfo: this.initFormGroup(this.personalInfoGroup, PERSONAL_INFO_CONTROLS),
      education: this.initFormGroup(this.educationGroup, EDUCATION_CONTROLS),
      workingExperience: this.initFormGroup(this.workingExperienceGroup, WORK_EXP_CONTROLS)
    });
  }

  initFormGroup(groupName: FormGroup, groupControls: ApplicationFormControl[]): FormGroup {
    groupName = this.formBuilder.group({});
    groupControls.forEach(control => {
      groupName.addControl(control.propertyName, this.formBuilder.control('', control.validators));
    });
    return groupName;
  }

  getValue(value): void {
    this.educationCenter = value;
  }

  onSubmit(): void {
    this.getData(PERSONAL_INFO_CONTROLS, 'personalInfo');
    this.resultArray.push({title: 'Educational center', value: this.educationCenter});
    this.getData(EDUCATION_CONTROLS, 'education');
    this.getData(WORK_EXP_CONTROLS, 'workingExperience');

    this.modalService.modalData = this.resultArray;
    this.router.navigate(['result']);
  }

  getData(controls: { title: string, propertyName: any }[], groupName: string): void {
    controls.forEach(control => {
      this.resultArray.push({
        title: control.title,
        value: this.applicationForm.get(groupName).get(control.propertyName).value
      });
    });
  }
}
