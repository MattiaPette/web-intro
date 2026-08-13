import type { Contact } from "../../containers/contacts/contacts.model";

export type ContactComponentProps = {
  contacts: Contact[],
  onDeleteContact: (id: number) => void,
};