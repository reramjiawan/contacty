import { AbstractControl, ValidationErrors } from '@angular/forms';

export const trailingSpaceValidator = (option: { no?: boolean } = {}) => {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      const pattern = /^(?!\s).*[^\s]$/;
      const test = !pattern.test(control.value);
      if (option.no) {
        return test ? {trailingSpaceNo: true} : null;
      } else {
        return test ? null : {trailingSpace: true};
      }
    }
    return null;
  };
};
