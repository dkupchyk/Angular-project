import {Validators} from '@angular/forms';
import {ValidateDate} from '../../shared/constants/validators.constant';
import {PHONE_NUMBERS} from '../../shared/constants/patterns.constant';
import {ApplicationFormControl} from '../../shared/interfaces/application-form-control.interface';

export const PERSONAL_INFO_CONTROLS: ApplicationFormControl[] = [
  {
    title: 'Full name',
    propertyName: 'fullName',
    validators: [Validators.required]
  },
  {
    title: 'Date of birth',
    propertyName: 'dateOfBirth',
    validators: [Validators.required, ValidateDate(Date.now())]
  },
  {
    title: 'Phone number',
    propertyName: 'phoneNumber',
    validators: [Validators.required, Validators.pattern(PHONE_NUMBERS)]
  },
  {
    title: 'Address',
    propertyName: 'address',
    validators: [Validators.required]
  },
  {
    title: 'Marital status',
    propertyName: 'maritalStatus',
    validators: [Validators.required]
  },
  {
    title: 'Email',
    propertyName: 'email',
    validators: [Validators.required, Validators.email]
  },
  {
    title: 'Position',
    propertyName: 'position',
    validators: [Validators.required]
  }
];

export const EDUCATION_CONTROLS = [
  {
    title: 'Entry year',
    propertyName: 'entryYear',
    validators: [Validators.required]
  },
  {
    title: 'Finish year',
    propertyName: 'finishYear',
    validators: [Validators.required]
  },
  {
    title: 'Degree',
    propertyName: 'degree',
    validators: [Validators.required]
  }
];

export const WORK_EXP_CONTROLS = [
  {
    title: 'Last working place',
    propertyName: 'lastWorkingPlace',
    validators: [Validators.required]
  },
  {
    title: 'Last position',
    propertyName: 'lastPosition',
    validators: [Validators.required]
  },
  {
    title: 'Start working year',
    propertyName: 'startWorkingYear',
    validators: [Validators.required]
  },
  {
    title: 'End working year',
    propertyName: 'endWorkingYear',
    validators: [Validators.required]
  },
  {
    title: 'Reason for leaving',
    propertyName: 'reasonForLeaving',
    validators: [Validators.required]
  }
];
