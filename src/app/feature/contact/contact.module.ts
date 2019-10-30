import { NgModule } from '@angular/core';
import { ContactAboutModule } from './feature/contact-about/contact-about.module';
import { ContactAddModule } from './feature/contact-add/contact-add.module';
import { ContactDetailModule } from './feature/contact-detail/contact-detail.module';
import { ContactEditModule } from './feature/contact-edit/contact-edit.module';
import { ContactFavouriteModule } from './feature/contact-favourite/contact-favourite.module';
import { ContactListModule } from './feature/contact-list/contact-list.module';
import { ContactSearchModule } from './feature/contact-search/contact-search.module';
import { ContactQuery } from './state/contact.query';
import { ContactService } from './state/contact.service';
import { ContactStore } from './state/contact.store';

@NgModule({
  imports: [
    ContactListModule,
    ContactFavouriteModule,
    ContactDetailModule,
    ContactSearchModule,
    ContactAddModule,
    ContactEditModule,
    ContactAboutModule
  ]
})
export class ContactModule {
  constructor(contactQuery: ContactQuery,
              contactService: ContactService,
              contactStore: ContactStore) {
  }
}
