import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { keepOrder } from '../../../../../../shared/utility/keepOrder';
import { keepTrack } from '../../../../../../shared/utility/keepTrack';
import { ContactModel } from '../../../../state/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  contacts: { [key: string]: { [key: string]: ContactModel } };

  keepOrder = keepOrder;

  keepTrack = keepTrack;
}
