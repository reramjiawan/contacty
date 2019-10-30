import { ActiveState, EntityState } from '@datorama/akita';
import { ContactEntity } from './contact.entity';

export interface ContactState extends EntityState<ContactEntity>, ActiveState {
}
