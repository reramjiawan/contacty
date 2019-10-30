import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactModule } from '../contact/contact.module';
import { ShellTabBarComponent } from './component/shell-tab-bar/shell-tab-bar.component';
import { ShellToolbarComponent } from './component/shell-toolbar/shell-toolbar.component';
import { ShellTabContainerComponent } from './container/shell-tab-container/shell-tab-container.component';
import { ShellToolbarContainerComponent } from './container/shell-toolbar-container/shell-toolbar-container.component';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellSearchViewComponent } from './view/shell-search-view/shell-search-view.component';
import { ShellTabViewComponent } from './view/shell-tab-view/shell-tab-view.component';

@NgModule({
  declarations: [
    ShellToolbarContainerComponent,
    ShellTabContainerComponent,
    ShellSearchViewComponent,
    ShellTabViewComponent,
    ShellToolbarComponent,
    ShellTabBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ContactModule,
    ShellRoutingModule
  ]
})
export class ShellModule {
}
