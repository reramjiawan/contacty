import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAboutViewComponent } from '../contact/feature/contact-about/view/contact-about-view/contact-about-view.component';
import { ContactAddViewComponent } from '../contact/feature/contact-add/view/contact-add-view/contact-add-view.component';
import { ContactDetailViewComponent } from '../contact/feature/contact-detail/view/contact-detail-view/contact-detail-view.component';
import { ContactEditViewComponent } from '../contact/feature/contact-edit/view/contact-edit-view/contact-edit-view.component';
import { ContactFavouriteViewComponent } from '../contact/feature/contact-favourite/view/contact-favourite-view/contact-favourite-view.component';
import { ContactListViewComponent } from '../contact/feature/contact-list/view/contact-list-view/contact-list-view.component';
import { ContactFavouriteSearchViewComponent } from '../contact/feature/contact-search/view/contact-favourite-search-view/contact-favourite-search-view.component';
import { ContactSearchViewComponent } from '../contact/feature/contact-search/view/contact-search-view/contact-search-view.component';
import { ContactGuard } from './guard/contact.guard';
import { ShellSearchViewComponent } from './view/shell-search-view/shell-search-view.component';
import { ShellTabViewComponent } from './view/shell-tab-view/shell-tab-view.component';

const routes: Routes = [
  {
    path: '',
    component: ShellSearchViewComponent,
    children: [
      {
        path: '',
        component: ShellTabViewComponent,
        children: [
          {
            path: 'contact',
            component: ContactListViewComponent
          },
          {
            path: 'favourite',
            component: ContactFavouriteViewComponent
          }
        ]
      },
      {
        path: 'contact/search',
        component: ContactSearchViewComponent
      },
      {
        path: 'favourite/search',
        component: ContactFavouriteSearchViewComponent
      }
    ]
  },
  {
    path: 'contact/add',
    component: ContactAddViewComponent
  },
  {
    path: 'contact/detail/:id',
    component: ContactDetailViewComponent,
    canActivate: [ContactGuard]
  },
  {
    path: 'contact/edit/:id',
    component: ContactEditViewComponent,
    canActivate: [ContactGuard]
  },
  {
    path: 'about',
    component: ContactAboutViewComponent
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
export class ShellRoutingModule {
}
