import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Input()
  errorMessages: ValidationErrors;

  @Input()
  form: FormGroup;
}
