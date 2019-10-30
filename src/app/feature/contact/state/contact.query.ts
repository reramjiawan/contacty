import { Injectable } from '@angular/core';
import { combineQueries, Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ContactModel } from './contact.model';
import { ContactState } from './contact.state';
import { ContactStore } from './contact.store';

@Injectable({
  providedIn: 'root'
})
@QueryConfig({
  sortBy: 'firstName',
  sortByOrder: Order.ASC
})
export class ContactQuery extends QueryEntity<ContactState> {

  contacts$: Observable<{ [key: string]: ContactModel }> = this.selectAll().pipe(
    map(contact => {
      return contact.reduce((acc, val) => {
        acc[val.id] = {
          ...val,
          initial: (val.firstName.charAt(0) + val.lastName.charAt(0)).toUpperCase(),
          name: val.firstName + ' ' + val.lastName
        };
        return acc;
      }, {} as { [key: string]: ContactModel });
    }),
    shareReplay(1)
  );

  contact$: Observable<{ [key: string]: { [key: string]: ContactModel } }> = this.contacts$.pipe(
    map(contact => {
      return Object.values(contact).reduce((acc, val) => {
        const initial = val.initial.charAt(0);
        if (!acc[initial]) {
          acc[initial] = {};
        }
        acc[initial][val.id] = val;
        return acc;
      }, {} as { [key: string]: { [key: string]: ContactModel } });
    }),
    shareReplay(1)
  );

  active$: Observable<ContactModel> = combineQueries([
    this.selectActiveId(),
    this.contacts$
  ]).pipe(
    map(([active, contact]) => contact[active]),
    shareReplay(1)
  );

  favourite$: Observable<{ [key: string]: ContactModel }> = this.contacts$.pipe(
    map(contact => {
      return Object.values(contact).reduce((acc, val) => {
        if (val.favourite) {
          acc[val.id] = val;
        }
        return acc;
      }, {} as { [key: string]: ContactModel });
    }),
    shareReplay(1)
  );

  constructor(protected store: ContactStore) {
    super(store);
  }

}
