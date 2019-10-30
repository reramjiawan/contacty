import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactAboutFooterComponent } from './component/contact-about-footer/contact-about-footer.component';
import { ContactAboutToolbarComponent } from './component/contact-about-toolbar/contact-about-toolbar.component';
import { ContactAboutComponent } from './component/contact-about/contact-about.component';
import { ContactAboutContainerComponent } from './container/contact-about-container/contact-about-container.component';
import { ContactAboutToolbarContainerComponent } from './container/contact-about-toolbar-container/contact-about-toolbar-container.component';
import { ContactAboutViewComponent } from './view/contact-about-view/contact-about-view.component';

@NgModule({
  declarations: [
    ContactAboutViewComponent,
    ContactAboutContainerComponent,
    ContactAboutToolbarComponent,
    ContactAboutComponent,
    ContactAboutToolbarContainerComponent,
    ContactAboutFooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ContactAboutModule {
}
