import type { Contact } from "../../types/contact";

export type ContactsDialogProps = {
  open: boolean;
  title: string;
  initialValue?: Omit<Contact, 'id'>;
  onSubmit: (contact: Omit<Contact, 'id'>) => void;
  onCancel: () => void;
}
