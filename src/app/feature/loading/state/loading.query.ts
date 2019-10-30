import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { LoadingState } from './loading.state';
import { LoadingStore } from './loading.store';

@Injectable()
export class LoadingQuery extends Query<LoadingState> {

  progress$: Observable<number> = this.select('progress').pipe(
    shareReplay(1)
  );

  constructor(protected store: LoadingStore) {
    super(store);
  }
}
