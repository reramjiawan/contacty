import { ContactEntity } from './contact.entity';

export interface ContactModel extends ContactEntity {
  initial: string;

  name: string;
}
