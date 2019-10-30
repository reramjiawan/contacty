import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { keepOrder } from '../../../../../../shared/utility/keepOrder';
import { keepTrack } from '../../../../../../shared/utility/keepTrack';
import { ContactModel } from '../../../../state/contact.model';

@Component({
  selector: 'app-contact-favourite',
  templateUrl: './contact-favourite.component.html',
  styleUrls: ['./contact-favourite.component.scss']
})
export class ContactFavouriteComponent {
  @Output()
  action = new EventEmitter<EmitterModel>();

  @Input()
  favourites: { [key: string]: ContactModel };

  keepOrder = keepOrder;

  keepTrack = keepTrack;
}
