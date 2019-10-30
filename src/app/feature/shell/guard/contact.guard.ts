import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { ContactQuery } from '../../contact/state/contact.query';
import { ContactService } from '../../contact/state/contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanActivate {
  constructor(private contact: ContactService,
              private contactQuery: ContactQuery) {
  }

  canActivate(next: ActivatedRouteSnapshot) {
    const can = this.contactQuery.getEntity(next.params.id);
    if (!!can) {
      this.contact.setActive(next.params.id);
    }
    return !!can;
  }

}
