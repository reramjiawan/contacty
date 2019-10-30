import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactService } from '../../../../state/contact.service';
import { ContactSearchQuery } from '../../state/contact-search.query';
import { ContactSearchService } from '../../state/contact-search.service';

@Component({
  selector: 'app-contact-favourite-search-container',
  templateUrl: './contact-favourite-search-container.component.html',
  styleUrls: []
})
export class ContactFavouriteSearchContainerComponent {
  contacts$ = this.contactSearchQuery.search$;

  term$ = this.contactSearchQuery.searchTerm$;

  constructor(private contact: ContactService,
              private contactSearch: ContactSearchService,
              private contactSearchQuery: ContactSearchQuery,
              private navController: NavController,
              private router: Router) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'contact':
        this.contact.favourite(event.payload);
        this.navController.back();
        this.contactSearch.setTerm('');
        break;
      case 'add':
        this.router.navigate(['/contact/add']);
        break;
    }
  }
}
