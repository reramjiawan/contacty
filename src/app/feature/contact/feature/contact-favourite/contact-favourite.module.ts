import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactFavouriteComponent } from './component/contact-favourite/contact-favourite.component';
import { ContactFavouriteContainerComponent } from './container/contact-favourite-container/contact-favourite-container.component';
import { ContactFavouriteViewComponent } from './view/contact-favourite-view/contact-favourite-view.component';

@NgModule({
  declarations: [
    ContactFavouriteComponent,
    ContactFavouriteContainerComponent,
    ContactFavouriteViewComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule
  ]
})
export class ContactFavouriteModule {
}
