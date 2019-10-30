import { AbstractControl, ValidationErrors } from '@angular/forms';

export const numericValidator = (option: { no?: boolean } = {}) => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const pattern = /[0-9]+/;
      const test = pattern.test(control.value);
      if (option.no) {
        return test ? {numericNo: true} : null;
      } else {
        return test ? null : {numeric: true};
      }
    }
    return null;
  };
};
