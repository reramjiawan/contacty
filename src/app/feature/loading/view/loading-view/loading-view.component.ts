import { Component } from '@angular/core';
import { LoadingQuery } from '../../state/loading.query';
import { LoadingService } from '../../state/loading.service';
import { LoadingStore } from '../../state/loading.store';

@Component({
  selector: 'app-loading-view',
  templateUrl: './loading-view.component.html',
  styleUrls: [],
  providers: [
    LoadingStore,
    LoadingQuery,
    LoadingService
  ]
})
export class LoadingViewComponent {
  constructor(loadingQuery: LoadingQuery,
              loadingService: LoadingService,
              loadingStore: LoadingStore) {
  }
}
