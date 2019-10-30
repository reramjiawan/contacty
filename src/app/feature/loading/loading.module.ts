import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoadingProgressComponent } from './component/loading-progress/loading-progress.component';
import { LoadingContainerComponent } from './container/loading-container/loading-container.component';
import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingViewComponent } from './view/loading-view/loading-view.component';

@NgModule({
  declarations: [
    LoadingContainerComponent,
    LoadingViewComponent,
    LoadingProgressComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule,
    IonicModule
  ]
})
export class LoadingModule {
}
