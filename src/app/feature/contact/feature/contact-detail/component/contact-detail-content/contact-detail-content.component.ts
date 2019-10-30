import { Component, Input } from '@angular/core';
import { ContactModel } from '../../../../state/contact.model';

@Component({
  selector: 'app-contact-detail-content',
  templateUrl: './contact-detail-content.component.html',
  styleUrls: ['./contact-detail-content.component.scss']
})
export class ContactDetailContentComponent {
  @Input()
  contact: ContactModel;
}
