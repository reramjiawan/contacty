import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { EmitterModel } from '../../../../../../shared/models/emitter.model';
import { ContactQuery } from '../../../../state/contact.query';
import { ContactService } from '../../../../state/contact.service';

@Component({
  selector: 'app-contact-detail-toolbar-container',
  templateUrl: './contact-detail-toolbar-container.component.html',
  styleUrls: []
})
export class ContactDetailToolbarContainerComponent {
  contact$ = this.contactQuery.active$;

  constructor(private contactQuery: ContactQuery,
              private contact: ContactService,
              private navController: NavController,
              private router: Router,
              private actionSheetController: ActionSheetController,
              private alertController: AlertController) {
  }

  action(event: EmitterModel) {
    switch (event.type) {
      case 'back':
        this.navController.back();
        break;
      case 'favourite':
        this.contact.favourite(event.payload);
        break;
      case 'unfavourite':
        this.contact.unfavourite(event.payload);
        break;
      case 'more':
        this.moreActionSheet(event.payload);
        break;
    }
  }

  private async deleteAlert(id: string) {
    const alert = await this.alertController.create({
      header: 'Delete contact',
      message: 'Are you sure you want to delete this contact?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.contact.remove(id);
            this.navController.back();
          }
        }
      ]
    });

    await alert.present();
  }

  private async moreActionSheet(id: string) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/contact/edit', id]);
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          handler: () => {
            this.deleteAlert(id);
          }
        },
        {
          text: 'Cancel',
          icon: 'close'
        }
      ]
    });
    await actionSheet.present();
  }
}
