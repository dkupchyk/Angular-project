import {AbstractControlOptions, ValidatorFn} from '@angular/forms';

export interface ApplicationFormControl {
  title: string;
  propertyName: string;
  validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions;
}
