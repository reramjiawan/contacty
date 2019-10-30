import { ValidationErrors } from '@angular/forms';

export const errorMessages: ValidationErrors = {
  required: 'Field is required',
  numeric: 'Numeric characters expected',
  numericNo: 'No numeric characters allowed',
  email: 'Valid email expected',
  space: 'Spaces are expected',
  spaceNo: 'No spaces allowed',
  multipleSpace: 'Multiple spaces expected',
  multipleSpaceNo: 'No multiple spaces allowed',
  trailingSpace: 'Trailing spaces expected',
  trailingSpaceNo: 'No trailing spaces allowed',
  alphabetic: 'Alphabetic characters expected',
  alphabeticNo: 'No alphabetic characters allowed',
  special: 'Special characters expected',
  specialNo: 'No special characters allowed'
};
