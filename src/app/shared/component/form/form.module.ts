import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormErrorComponent } from './component/form-error/form-error.component';

@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    FormErrorComponent
  ]
})
export class FormModule {
}
