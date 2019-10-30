import { AbstractControl, ValidationErrors } from '@angular/forms';

export const requiredValidator = () => {
  return (control: AbstractControl): ValidationErrors => {
    return control.value && control.value.length ? null : {required: true};
  };
};
