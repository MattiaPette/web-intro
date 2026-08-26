import type { Contact } from "../../types/contact";

export type GetAllContactsFunction = () => Promise<Contact[]>;
export type CreateContactFunction = (newContact: Omit<Contact, 'id'>) => Promise<void>;
export type DeleteContactFunction = (id: number) => Promise<void>;
export type UpdateContactFunction = (id: number, updatedContact: Partial<Omit<Contact, "id">>) => Promise<void>;