import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { LoadingState } from './loading.state';

@Injectable()
@StoreConfig({name: 'loading'})
export class LoadingStore extends Store<LoadingState> {
  constructor() {
    super({
      loadStart: 0,
      loadEnd: 0,
      progress: 0
    });
  }
}
