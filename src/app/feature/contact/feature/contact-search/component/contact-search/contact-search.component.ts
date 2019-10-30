import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { keepOrder } from '../../../../../../shared/utility/keepOrder';
import { keepTrack } from '../../../../../../shared/utility/keepTrack';
import { ContactModel } from '../../../../state/contact.model';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  contacts: { [key: string]: ContactModel };

  keepOrder = keepOrder;

  keepTrack = keepTrack;

  @Input()
  term: string;
}
