import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactQuery } from '../../../../state/contact.query';

@Component({
  selector: 'app-contact-favourite-container',
  templateUrl: './contact-favourite-container.component.html',
  styleUrls: []
})
export class ContactFavouriteContainerComponent {
  favourite$ = this.contactQuery.favourite$;

  constructor(private contactQuery: ContactQuery,
              private router: Router) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'contact':
        this.router.navigate(['/contact/detail', event.payload]);
        break;
      case 'favourite':
        this.router.navigate(['/favourite/search']);
        break;
    }
  }
}
