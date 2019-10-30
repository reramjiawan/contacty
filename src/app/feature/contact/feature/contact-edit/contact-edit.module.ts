import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { ContactEditToolbarComponent } from './component/contact-edit-toolbar/contact-edit-toolbar.component';
import { ContactEditContainerComponent } from './container/contact-edit-container/contact-edit-container.component';
import { ContactEditToolbarContainerComponent } from './container/contact-edit-toolbar-container/contact-edit-toolbar-container.component';
import { ContactEditViewComponent } from './view/contact-edit-view/contact-edit-view.component';

@NgModule({
  declarations: [
    ContactEditViewComponent,
    ContactEditToolbarComponent,
    ContactEditContainerComponent,
    ContactEditToolbarContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ContactFormModule
  ]
})
export class ContactEditModule {
}
