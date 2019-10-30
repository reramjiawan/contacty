import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';

@Component({
  selector: 'app-contact-add-toolbar',
  templateUrl: './contact-add-toolbar.component.html',
  styleUrls: ['./contact-add-toolbar.component.scss']
})
export class ContactAddToolbarComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  form: FormGroup;
}
