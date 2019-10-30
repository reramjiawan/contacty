import { Injectable } from '@angular/core';
import { action, guid } from '@datorama/akita';
import { ToastController } from '@ionic/angular';
import produce from 'immer';
import { ContactEntity } from './contact.entity';
import { ContactStore } from './contact.store';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private contactStore: ContactStore,
              private toastController: ToastController) {
  }

  @action('ADD')
  add(data: Omit<ContactEntity, 'id'>) {
    const id = guid();
    this.contactStore.add({id, ...data});
    this.toastController.dismiss().finally(async () => {
      const toast = await this.toastController.create({
        message: 'Added contact',
        duration: 1500,
        showCloseButton: true
      });
      await toast.present();
    });
  }

  @action('FAVOURITE')
  favourite(id: string) {
    this.contactStore.update(id, state => produce(state, draft => {
      draft.favourite = true;
    }));
    this.toastController.dismiss().finally(async () => {
      const toast = await this.toastController.create({
        message: 'Favourited contact',
        duration: 1500,
        showCloseButton: true
      });
      await toast.present();
    });
  }

  @action('REMOVE')
  remove(id: string) {
    this.contactStore.remove(id);
    this.toastController.dismiss().finally(async () => {
      const toast = await this.toastController.create({
        message: 'Deleted contact',
        duration: 1500,
        showCloseButton: true
      });
      await toast.present();
    });
  }

  @action('ACTIVE')
  setActive(id: string) {
    this.contactStore.setActive(id);
  }

  @action('UNFAVOURITE')
  async unfavourite(id: string) {
    this.contactStore.update(id, state => produce(state, draft => {
      draft.favourite = false;
    }));
    this.toastController.dismiss().finally(async () => {
      const toast = await this.toastController.create({
        message: 'Unfavourited contact',
        duration: 1500,
        showCloseButton: true
      });
      await toast.present();
    });
  }

  @action('UPDATE')
  update(data: ContactEntity) {
    this.contactStore.update(data.id, state => produce(state, draft => {
      draft.favourite = data.favourite;
      draft.email = data.email;
      draft.firstName = data.firstName;
      draft.lastName = data.lastName;
      draft.mobile = data.mobile;
    }));
    this.toastController.dismiss().finally(async () => {
      const toast = await this.toastController.create({
        message: 'Updated contact',
        duration: 1500,
        showCloseButton: true
      });
      await toast.present();
    });
  }

}
