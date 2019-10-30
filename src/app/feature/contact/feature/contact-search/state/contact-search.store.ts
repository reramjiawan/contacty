import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ContactSearchState } from './contact-search.state';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'contact-search'})
export class ContactSearchStore extends Store<ContactSearchState> {
  constructor() {
    super({
      term: ''
    });
  }
}
