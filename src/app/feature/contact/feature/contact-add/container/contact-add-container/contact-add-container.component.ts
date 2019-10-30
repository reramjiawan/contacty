import { Component } from '@angular/core';
import { ContactAddService } from '../../service/contact-add.service';

@Component({
  selector: 'app-contact-add-container',
  templateUrl: './contact-add-container.component.html',
  styleUrls: []
})
export class ContactAddContainerComponent {
  errorMessages = this.contactAdd.errorMessages;

  form = this.contactAdd.form;

  constructor(private contactAdd: ContactAddService) {
  }
}
