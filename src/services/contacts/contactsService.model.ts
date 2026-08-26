import type { Contact } from "../../types/contact";

export type GetAllContactsFunction = () => Promise<Contact[]>;
export type CreateContactFunction = (newContact: Omit<Contact, 'id'>) => Promise<void>;
