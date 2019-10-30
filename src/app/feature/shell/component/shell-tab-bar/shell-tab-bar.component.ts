import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmitterModel } from '../../../../shared/models/emitter.model';

@Component({
  selector: 'app-shell-tab-bar',
  templateUrl: './shell-tab-bar.component.html',
  styleUrls: ['./shell-tab-bar.component.scss']
})
export class ShellTabBarComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  url: string;
}
