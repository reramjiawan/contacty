import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactModel } from '../../../../state/contact.model';

@Component({
  selector: 'app-contact-detail-toolbar',
  templateUrl: './contact-detail-toolbar.component.html',
  styleUrls: ['./contact-detail-toolbar.component.scss']
})
export class ContactDetailToolbarComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  contact: ContactModel;
}
