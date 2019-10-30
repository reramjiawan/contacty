import { AbstractControl, ValidationErrors } from '@angular/forms';

export const spaceValidator = (option: { no?: boolean } = {}) => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const pattern = /\s+/;
      const test = pattern.test(control.value);
      if (option.no) {
        return test ? {spaceNo: true} : null;
      } else {
        return test ? null : {space: true};
      }
    }
    return null;
  };
};
