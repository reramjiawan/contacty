import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingViewComponent } from './view/loading-view/loading-view.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoadingRoutingModule {
}
