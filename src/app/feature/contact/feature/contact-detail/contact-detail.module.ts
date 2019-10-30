import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactDetailContentComponent } from './component/contact-detail-content/contact-detail-content.component';
import { ContactDetailToolbarComponent } from './component/contact-detail-toolbar/contact-detail-toolbar.component';
import { ContactDetailContentContainerComponent } from './container/contact-detail-content-container/contact-detail-content-container.component';
import { ContactDetailToolbarContainerComponent } from './container/contact-detail-toolbar-container/contact-detail-toolbar-container.component';
import { ContactDetailViewComponent } from './view/contact-detail-view/contact-detail-view.component';

@NgModule({
  declarations: [
    ContactDetailViewComponent,
    ContactDetailToolbarComponent,
    ContactDetailToolbarContainerComponent,
    ContactDetailContentComponent,
    ContactDetailContentContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ContactDetailModule {
}
