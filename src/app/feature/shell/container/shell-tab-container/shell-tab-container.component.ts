import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EmitterModel } from '../../../../shared/models/emitter.model';

@Component({
  selector: 'app-shell-tab-container',
  templateUrl: './shell-tab-container.component.html',
  styleUrls: []
})
export class ShellTabContainerComponent {
  navigation$ = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd)
  ) as Observable<NavigationEnd>;

  constructor(private router: Router) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'navigate':
        this.router.navigate([event.payload]);
        break;
    }
  }
}
