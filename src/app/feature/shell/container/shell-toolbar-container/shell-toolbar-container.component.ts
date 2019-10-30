import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonSearchbar, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ContactSearchQuery } from '../../../contact/feature/contact-search/state/contact-search.query';
import { ContactSearchService } from '../../../contact/feature/contact-search/state/contact-search.service';

@Component({
  selector: 'app-shell-toolbar-container',
  templateUrl: './shell-toolbar-container.component.html',
  styleUrls: []
})
export class ShellToolbarContainerComponent implements OnInit, OnDestroy {
  cancelButton: string;

  term$ = this.contactSearchQuery.searchTerm$;

  private input: IonSearchbar;

  private subscriptions = new Subscription();

  constructor(private router: Router,
              private navController: NavController,
              private contactSearchQuery: ContactSearchQuery,
              private contactSearch: ContactSearchService) {
  }

  action(event) {
    switch (event.type) {
      case 'ionFocus':
        switch (this.router.url) {
          case '/contact':
            this.router.navigate(['/contact/search']);
            break;
          case '/favourite':
            this.router.navigate(['/favourite/search']);
            break;
        }
        break;
      case 'ionChange':
        this.contactSearch.setTerm(event.detail.value);
        break;
      case 'ionBlur':
        switch (this.router.url) {
          case '/contact/search':
          case '/favourite/search':
            this.input.getInputElement().then(input => setTimeout(() => input.focus()));
            break;
        }
        break;
      case 'search':
        this.input = this.input || event.payload;
        break;
      case 'ionCancel':
        this.navController.back();
        break;
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe((res: NavigationEnd) => {
        switch (res.url) {
          case '/contact':
          case '/favourite':
            this.cancelButton = 'focus';
            this.input.getInputElement().then(input => setTimeout(() => input.blur()));
            break;
          case '/contact/search':
          case '/favourite/search':
            this.cancelButton = 'always';
            this.input.getInputElement().then(input => setTimeout(() => input.focus()));
            break;
        }
      })
    );
  }
}
