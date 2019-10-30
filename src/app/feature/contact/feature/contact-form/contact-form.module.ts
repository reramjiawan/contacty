import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactFormComponent } from './component/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule {
}
