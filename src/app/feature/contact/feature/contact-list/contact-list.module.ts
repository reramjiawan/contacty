import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactListContainerComponent } from './container/contact-list-container/contact-list-container.component';
import { ContactListViewComponent } from './view/contact-list-view/contact-list-view.component';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactListContainerComponent,
    ContactListViewComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule
  ]
})
export class ContactListModule {
}
