import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutocompleteSettings} from '../shared/interfaces/autocomplete-settings.interface';
import {ValidateDate} from '../shared/constants/validators.constant';
import {PHONE_NUMBERS} from '../shared/constants/patterns.constant';
import {EDUCATION_CENTERS, MARITAL_STATUS_OPTIONS, POSITION_OPTIONS, YEARS} from '../shared/constants/work-application-form.constants';

@Component({
  selector: 'app-work-application',
  templateUrl: './work-application.component.html',
  styleUrls: ['./work-application.component.less']
})
export class WorkApplicationComponent implements OnInit {
  applicationForm: FormGroup;

  maritalStatusOptions = MARITAL_STATUS_OPTIONS;
  positionOptions = POSITION_OPTIONS;
  settings: AutocompleteSettings = {
    placeholder: 'Name',
    symbolsToShow: 1,
    customClass: ''
  };

  educationCenters: string[] = EDUCATION_CENTERS;
  educationCenter: string;

  entryYears: string[] = YEARS;
  finishYears: string[] = YEARS;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, ValidateDate(Date.now())]],
      phoneNumber: ['', [Validators.required, Validators.pattern(PHONE_NUMBERS)]],
      address: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      entryYear: ['', Validators.required],
      finishYear: ['', Validators.required],
      degree: ['', Validators.required],
    });
  }

  changeValue(e, propertyName: string): void {
    this.applicationForm.get(propertyName).setValue(e.target.value, {
      onlySelf: true
    });
  }

  getValue(value): void {
    this.educationCenter = value;
  }

  onSubmit(): void {}
}
