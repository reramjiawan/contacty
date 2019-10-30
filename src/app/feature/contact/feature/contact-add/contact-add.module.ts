import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { ContactAddToolbarComponent } from './component/contact-add-toolbar/contact-add-toolbar.component';
import { ContactAddContainerComponent } from './container/contact-add-container/contact-add-container.component';
import { ContactAddToolbarContainerComponent } from './container/contact-add-toolbar-container/contact-add-toolbar-container.component';
import { ContactAddViewComponent } from './view/contact-add-view/contact-add-view.component';

@NgModule({
  declarations: [
    ContactAddViewComponent,
    ContactAddContainerComponent,
    ContactAddToolbarComponent,
    ContactAddToolbarContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ContactFormModule,
    SharedModule
  ]
})
export class ContactAddModule {
}
