import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactSearchQuery } from '../../state/contact-search.query';

@Component({
  selector: 'app-contact-search-container',
  templateUrl: './contact-search-container.component.html',
  styleUrls: []
})
export class ContactSearchContainerComponent {
  contacts$ = this.contactSearchQuery.search$;

  term$ = this.contactSearchQuery.searchTerm$;

  constructor(private contactSearchQuery: ContactSearchQuery,
              private router: Router) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'contact':
        this.router.navigate(['/contact/detail', event.payload]);
        break;
      case 'add':
        this.router.navigate(['/contact/add']);
        break;
    }
  }
}
