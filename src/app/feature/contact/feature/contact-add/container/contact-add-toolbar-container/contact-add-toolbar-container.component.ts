import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactEntity } from '../../../../state/contact.entity';
import { ContactService } from '../../../../state/contact.service';
import { ContactAddService } from '../../service/contact-add.service';

@Component({
  selector: 'app-contact-add-toolbar-container',
  templateUrl: './contact-add-toolbar-container.component.html',
  styleUrls: []
})
export class ContactAddToolbarContainerComponent {
  form = this.contactAdd.form;

  constructor(private contact: ContactService,
              private contactAdd: ContactAddService,
              private navController: NavController) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'back':
        this.navController.back();
        break;
      case 'save':
        const contact = Object.entries(this.form.getRawValue() as ContactEntity).reduce((acc, [key, val]) => {
          acc[key] = val.trim();
          return acc;
        }, {} as ContactEntity);
        this.contact.add(contact);
        this.navController.back();
        this.contactAdd.form.reset();
        break;
    }
  }
}
