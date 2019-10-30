import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  animations: [
    trigger('emptyAnimation', [
      transition(':leave', [
        style({position: 'absolute', left: 0, right: 0}),
        animate('0.15s', style({opacity: 0}))
      ]),
      transition(':enter', [
        style({opacity: 0}),
        animate('0.15s', style({opacity: 1}))
      ])
    ])
  ]
})
export class EmptyComponent {
  @HostBinding('@emptyAnimation')
  animation = true;

  @Input()
  icon = '';

  @Input()
  title = '';
}
