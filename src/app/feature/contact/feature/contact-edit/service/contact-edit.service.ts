import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { errorMessages } from '../../../../../shared/validation/error-messages';
import { alphabeticValidator } from '../../../../../shared/validator/alphabetic.validator';
import { multipleSpaceValidator } from '../../../../../shared/validator/multiple-space.validator';
import { numericValidator } from '../../../../../shared/validator/numeric.validator';
import { requiredValidator } from '../../../../../shared/validator/required.validator';
import { spaceValidator } from '../../../../../shared/validator/space.validator';
import { specialValidator } from '../../../../../shared/validator/special.validator';
import { trailingSpaceValidator } from '../../../../../shared/validator/trailing-space.validator';

@Injectable({
  providedIn: 'any'
})
export class ContactEditService {
  errorMessages = errorMessages;

  form = this.formBuilder.group({
    id: [''],
    firstName: ['', [
      requiredValidator(),
      alphabeticValidator(),
      multipleSpaceValidator({no: true}),
      trailingSpaceValidator({no: true}),
      numericValidator({no: true})
    ]],
    lastName: ['', [
      requiredValidator(),
      alphabeticValidator(),
      multipleSpaceValidator({no: true}),
      trailingSpaceValidator({no: true}),
      numericValidator({no: true})
    ]],
    mobile: ['', [
      requiredValidator(),
      numericValidator(),
      spaceValidator({no: true}),
      alphabeticValidator({no: true}),
      specialValidator({no: true})
    ]],
    email: ['', [
      requiredValidator(),
      spaceValidator({no: true}),
      Validators.email
    ]]
  });

  constructor(private formBuilder: FormBuilder) {
  }
}
