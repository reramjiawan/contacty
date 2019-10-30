import { AbstractControl, ValidationErrors } from '@angular/forms';

export const specialValidator = (option: { no?: boolean } = {}) => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const pattern = /[^\w\s]+/;
      const test = pattern.test(control.value);
      if (option.no) {
        return test ? {specialNo: true} : null;
      } else {
        return test ? null : {special: true};
      }
    }
    return null;
  };
};
