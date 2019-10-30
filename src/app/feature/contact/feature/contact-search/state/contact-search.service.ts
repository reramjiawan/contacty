import { Injectable } from '@angular/core';
import { action } from '@datorama/akita';
import produce from 'immer';
import { ContactSearchStore } from './contact-search.store';

@Injectable({
  providedIn: 'root'
})
export class ContactSearchService {
  constructor(private contactSearchStore: ContactSearchStore) {
  }

  @action('TERM')
  setTerm(term: string) {
    this.contactSearchStore.update(state => produce(state, draft => {
      draft.term = term;
    }));
  }
}
