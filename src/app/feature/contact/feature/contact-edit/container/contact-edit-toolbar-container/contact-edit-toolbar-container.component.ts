import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactService } from '../../../../state/contact.service';
import { ContactEditService } from '../../service/contact-edit.service';

@Component({
  selector: 'app-contact-edit-toolbar-container',
  templateUrl: './contact-edit-toolbar-container.component.html',
  styleUrls: []
})
export class ContactEditToolbarContainerComponent {
  form = this.contactEdit.form;

  constructor(private contact: ContactService,
              private contactEdit: ContactEditService,
              private navController: NavController) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'back':
        this.navController.back();
        break;
      case 'save':
        this.contact.update(this.form.getRawValue());
        this.navController.back();
        break;
    }
  }
}
