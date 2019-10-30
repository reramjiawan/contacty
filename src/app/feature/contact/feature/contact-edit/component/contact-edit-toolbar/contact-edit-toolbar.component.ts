import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';

@Component({
  selector: 'app-contact-edit-toolbar',
  templateUrl: './contact-edit-toolbar.component.html',
  styleUrls: ['./contact-edit-toolbar.component.scss']
})
export class ContactEditToolbarComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  form: FormGroup;
}
