import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ContactQuery } from '../../../../state/contact.query';
import { ContactEditService } from '../../service/contact-edit.service';

@Component({
  selector: 'app-contact-edit-view',
  templateUrl: './contact-edit-view.component.html',
  styleUrls: []
})
export class ContactEditViewComponent implements OnInit {
  contact$ = this.contactQuery.active$;

  constructor(private contactEdit: ContactEditService,
              private contactQuery: ContactQuery) {
  }

  ngOnInit() {
    this.contact$.pipe(take(1)).subscribe(res => {
      this.contactEdit.form.setValue({
        id: res.id,
        firstName: res.firstName,
        lastName: res.lastName,
        mobile: res.mobile,
        email: res.email
      });
    });
  }
}
