import { Component, EventEmitter, Output } from '@angular/core';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';

@Component({
  selector: 'app-contact-about-toolbar',
  templateUrl: './contact-about-toolbar.component.html',
  styleUrls: ['./contact-about-toolbar.component.scss']
})
export class ContactAboutToolbarComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();
}
