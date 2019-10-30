import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { ContactState } from './contact.state';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'contact'})
export class ContactStore extends EntityStore<ContactState> {
  constructor() {
    super({
      active: null
    });
  }
}
