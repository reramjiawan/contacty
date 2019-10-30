import { AbstractControl, ValidationErrors } from '@angular/forms';

export const alphabeticValidator = (option: { no?: boolean } = {}) => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const pattern = /[a-zA-Z]+/;
      const test = pattern.test(control.value);
      if (option.no) {
        return test ? {alphabeticNo: true} : null;
      } else {
        return test ? null : {alphabetic: true};
      }
    }
    return null;
  };
};
