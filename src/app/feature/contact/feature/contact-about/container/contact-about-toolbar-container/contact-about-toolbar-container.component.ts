import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';

@Component({
  selector: 'app-contact-about-toolbar-container',
  templateUrl: './contact-about-toolbar-container.component.html',
  styleUrls: []
})
export class ContactAboutToolbarContainerComponent {
  constructor(private navController: NavController) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'back':
        this.navController.back();
        break;
    }
  }
}
