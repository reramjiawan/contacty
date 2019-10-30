import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loading',
    loadChildren: () => import('../feature/loading/loading.module').then(module => module.LoadingModule)
  },
  {
    path: '',
    loadChildren: () => import('../feature/shell/shell.module').then(module => module.ShellModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
