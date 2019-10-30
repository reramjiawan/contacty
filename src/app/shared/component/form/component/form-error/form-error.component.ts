import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { keepTrack } from '../../../../utility/keepTrack';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  @Input()
  color: string;

  @Input()
  errorMessages: ValidationErrors;

  @Input()
  errors: ValidationErrors;

  keepTrack = keepTrack;
}
