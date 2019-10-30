import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { ContactModel } from '../../../state/contact.model';
import { ContactQuery } from '../../../state/contact.query';
import { ContactSearchState } from './contact-search.state';
import { ContactSearchStore } from './contact-search.store';

@Injectable({
  providedIn: 'root'
})
export class ContactSearchQuery extends Query<ContactSearchState> {

  searchTerm$: Observable<string> = this.select('term').pipe(
    map(res => res.replace(/\s+/, ' ').trim()),
    shareReplay(1)
  );

  search$: Observable<{ [key: string]: ContactModel }> = this.searchTerm$.pipe(
    withLatestFrom(this.contactQuery.contacts$),
    map(([search, contacts]) => {
      return Object.entries(contacts).reduce((acc, [key, val]) => {
        if (search) {
          const regex = new RegExp(search, 'i').test(val.name);
          if (regex) {
            acc[key] = val;
          }
        }
        return acc;
      }, {} as { [key: string]: ContactModel });
    }),
    shareReplay(1)
  );

  constructor(protected store: ContactSearchStore,
              private contactQuery: ContactQuery) {
    super(store);
  }

}
