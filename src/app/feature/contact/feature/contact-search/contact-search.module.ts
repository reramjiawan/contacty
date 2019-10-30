import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactSearchComponent } from './component/contact-search/contact-search.component';
import { ContactFavouriteSearchContainerComponent } from './container/contact-favourite-search-container/contact-favourite-search-container.component';
import { ContactSearchContainerComponent } from './container/contact-search-container/contact-search-container.component';
import { ContactSearchQuery } from './state/contact-search.query';
import { ContactSearchService } from './state/contact-search.service';
import { ContactSearchStore } from './state/contact-search.store';
import { ContactFavouriteSearchViewComponent } from './view/contact-favourite-search-view/contact-favourite-search-view.component';
import { ContactSearchViewComponent } from './view/contact-search-view/contact-search-view.component';

@NgModule({
  declarations: [
    ContactSearchViewComponent,
    ContactFavouriteSearchViewComponent,
    ContactSearchComponent,
    ContactSearchContainerComponent,
    ContactFavouriteSearchContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ]
})
export class ContactSearchModule {
  constructor(contactSearchQuery: ContactSearchQuery,
              contactSearch: ContactSearchService,
              contactStore: ContactSearchStore) {
  }
}
