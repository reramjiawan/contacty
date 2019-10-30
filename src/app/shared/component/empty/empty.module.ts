import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmptyComponent } from './component/empty/empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EmptyComponent
  ]
})
export class EmptyModule {
}
