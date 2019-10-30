import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { ContactEntity } from '../../contact/state/contact.entity';
import { ContactQuery } from '../../contact/state/contact.query';
import { ContactService } from '../../contact/state/contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanActivate {
  private previous: ContactEntity;

  constructor(private contact: ContactService,
              private contactQuery: ContactQuery) {
  }

  canActivate(next: ActivatedRouteSnapshot) {
    const can = this.contactQuery.getEntity(next.params.id);
    if (!this.previous) {
      this.previous = can;
    }
    if (!this.previous || can.id !== this.previous.id) {
      this.contact.setActive(next.params.id);
    }
    return !!can;
  }

}
