import { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import type { Contact } from './contacts.model';
import ContactComponent from '../../components/contacts/ContactsSection';
import ContactsDialogComponent from '../../components/contacts/ContactsDialog';

export default function ContactsContainer() {
  const contactsMock: Contact[] = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'text@example.com',
      telephone: '1234567890',
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Doe',
      email: 'test1@example.com',
      telephone: '0987654321',
    }
  ];

  const [contacts, setContacts] = useState<Contact[]>(contactsMock);
  const [addContactDialogOpen, setAddContactDialogOpen] = useState(false);
  const [editContactDialogOpen, setEditContactDialogOpen] = useState(false);
  const [editDialogData, setEditDialogData] = useState<Contact>();

  const handleContactDeletion = useCallback((id: number) => {
    const newContacts = [...contacts];
    newContacts.splice(newContacts.findIndex(c => c.id === id), 1);
    setContacts(newContacts);
  }, [contacts]);

  const handleAddContactSubmit = useCallback((addedContact: Omit<Contact, 'id'>) => {
    let nextId = Math.max(...contacts.map(c => c.id), 0) + 1;

    const newContact = {
      ...addedContact,
      id: nextId,
    }

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    setAddContactDialogOpen(false);
  }, [contacts]);

  const handleEditContactSubmit = useCallback((editedContact: Omit<Contact, 'id'>) => {
    if (!editDialogData) {
      // non dovrebbe mai succedere.
      console.error("error");
    } else {
      const { id } = editDialogData;

      const newContacts = [...contacts];
      const idx = newContacts.findIndex(c => c.id === id);
      if (idx === -1) {
        return null;
      }
      newContacts[idx] = { ...newContacts[idx], ...editedContact };

      setContacts(newContacts);
      setEditContactDialogOpen(false);
    }
  }, [contacts, editDialogData]);

  const handleAddDialogClose = useCallback(() => setAddContactDialogOpen(false), []);
  const handleEditDialogClose = useCallback(() => setEditContactDialogOpen(false), []);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: 'auto' }}>
      <h1>Contacts</h1>

      <ContactComponent
        contacts={contacts}
        onDeleteContact={handleContactDeletion}
        onAddContact={() => {
          setAddContactDialogOpen(true);
        }}
        onEditContact={(id) => {
          const data = contacts.find(c => c.id === id);

          if (!data) {
            console.log("error");
          } else {
            setEditDialogData(data);
            setEditContactDialogOpen(true);
          }
        }}
      />

      <ContactsDialogComponent
        open={addContactDialogOpen}
        title="Aggiungi Contatto"
        onCancel={handleAddDialogClose}
        onSubmit={handleAddContactSubmit}
      />

      <ContactsDialogComponent
        open={editContactDialogOpen}
        title="Modifica Contatto"
        initialValue={editDialogData}
        onCancel={handleEditDialogClose}
        onSubmit={handleEditContactSubmit}
      />

    </Box>
  )
}