import type { Contact } from "../../types/contact";

export type ContactComponentProps = {
  contacts: Contact[],
  onDeleteContact: (id: number) => void,
  onEditContact: (id: number) => void,
  onAddContact: () => void
};