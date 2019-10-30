import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoadingQuery } from '../../state/loading.query';

@Component({
  selector: 'app-loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: []
})
export class LoadingContainerComponent implements OnInit, OnDestroy {

  progress$ = this.loadingQuery.progress$;

  private subscriptions = new Subscription();

  constructor(private router: Router,
              private navController: NavController,
              private loadingQuery: LoadingQuery) {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.progress$.pipe(debounceTime(500)).subscribe(progress => {
        if (progress === 1) {
          this.router.navigateByUrl('/contact');
        }
      })
    );
  }

}
