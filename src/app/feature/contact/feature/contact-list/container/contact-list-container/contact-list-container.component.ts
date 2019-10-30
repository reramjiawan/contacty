import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactQuery } from '../../../../state/contact.query';
import { ContactService } from '../../../../state/contact.service';

@Component({
  selector: 'app-contact-list-container',
  templateUrl: './contact-list-container.component.html',
  styleUrls: []
})
export class ContactListContainerComponent {
  contact$ = this.contactQuery.contact$;

  constructor(private contact: ContactService,
              private contactQuery: ContactQuery,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'add':
        this.router.navigate(['add'], {relativeTo: this.activatedRoute});
        break;
      case 'contact':
        this.router.navigate(['detail', event.payload], {relativeTo: this.activatedRoute});
        break;
    }
  }
}
