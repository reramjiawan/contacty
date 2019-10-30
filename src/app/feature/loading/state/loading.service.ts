import { Injectable, OnDestroy } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { action } from '@datorama/akita';
import produce from 'immer';
import { Subscription } from 'rxjs';
import { LoadingStore } from './loading.store';

@Injectable()
export class LoadingService implements OnDestroy {

  private subscriptions = new Subscription();

  constructor(private router: Router,
              private loadingStore: LoadingStore) {
    this.subscriptions.add(
      this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart) {
          this.loadStart();
        } else if (event instanceof RouteConfigLoadEnd) {
          setTimeout(() => this.loadEnd());
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @action('LOAD END')
  private loadEnd() {
    this.loadingStore.update(state => produce(state, draft => {
      draft.loadEnd += 1;
      draft.progress = draft.loadEnd / draft.loadStart;
    }));
  }

  @action('LOAD START')
  private loadStart() {
    this.loadingStore.update(state => produce(state, draft => {
      draft.loadStart += 1;
    }));
  }

}
