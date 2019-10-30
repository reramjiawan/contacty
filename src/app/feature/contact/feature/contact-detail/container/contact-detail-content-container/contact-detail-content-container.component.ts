import { Component } from '@angular/core';
import { ContactQuery } from '../../../../state/contact.query';

@Component({
  selector: 'app-contact-detail-content-container',
  templateUrl: './contact-detail-content-container.component.html',
  styleUrls: []
})
export class ContactDetailContentContainerComponent {
  contact$ = this.contactQuery.active$;

  constructor(private contactQuery: ContactQuery) {
  }
}
