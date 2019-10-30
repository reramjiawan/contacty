import { AbstractControl, ValidationErrors } from '@angular/forms';

export const multipleSpaceValidator = (option: { no?: boolean } = {}) => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const pattern = /\s{2}/;
      const test = pattern.test(control.value);
      if (option.no) {
        return test ? {multipleSpaceNo: true} : null;
      } else {
        return test ? null : {multipleSpace: true};
      }
    }
    return null;
  };
};
