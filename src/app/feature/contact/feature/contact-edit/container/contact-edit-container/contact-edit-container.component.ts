import { Component } from '@angular/core';
import { ContactEditService } from '../../service/contact-edit.service';

@Component({
  selector: 'app-contact-edit-container',
  templateUrl: './contact-edit-container.component.html',
  styleUrls: []
})
export class ContactEditContainerComponent {
  errorMessages = this.contactEdit.errorMessages;

  form = this.contactEdit.form;

  constructor(private contactEdit: ContactEditService) {
  }
}
