import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { EmitterModel } from '../../../../shared/models/emitter.model';

@Component({
  selector: 'app-shell-toolbar',
  templateUrl: './shell-toolbar.component.html',
  styleUrls: ['./shell-toolbar.component.scss']
})
export class ShellToolbarComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  cancelButton = 'focus';

  @Input()
  term = '';

  @ViewChild(IonSearchbar, {static: true})
  set searchBar(search: IonSearchbar) {
    this.action.emit({payload: search, type: 'search'});
  }
}
