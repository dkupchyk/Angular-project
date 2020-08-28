import {AbstractControl, ValidatorFn} from '@angular/forms';

export function ValidateDate(date: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    console.log(Date.parse(control.value));
    console.log(date);

    if (control.value && Date.parse(control.value) >= date) {
      return { dateInvalid: true };
    }
    return null;
  };
}
