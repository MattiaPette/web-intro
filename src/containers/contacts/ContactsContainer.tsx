import { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ContactComponent from '../../components/contacts/ContactsSection';
import ContactsDialogComponent from '../../components/contacts/ContactsDialog';
import type { Contact } from '../../types/contact';
import { createContact, deleteContact, getAllContacts, updateContact } from '../../services/contacts/contacts.service';

export default function ContactsContainer() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [addContactDialogOpen, setAddContactDialogOpen] = useState(false);
  const [editContactDialogOpen, setEditContactDialogOpen] = useState(false);
  const [editDialogData, setEditDialogData] = useState<Contact>();

  useEffect(() => {
    getAllContacts().then((contractsList) => setContacts(contractsList));
  }, []);

  const handleContactDeletion = useCallback((id: number) => {
    deleteContact(id).then(() => {
      getAllContacts().then((contactsList) => setContacts(contactsList));
    });
  }, [contacts]);

  const handleAddContactSubmit = useCallback((addedContact: Omit<Contact, 'id'>) => {
    createContact(addedContact).then(() => {
      getAllContacts().then((contactsList) => setContacts(contactsList));
      setAddContactDialogOpen(false);
    });
  }, [contacts]);

  const handleEditContactSubmit = useCallback((editedContact: Omit<Contact, 'id'>) => {
    if (!editDialogData) {
      // non dovrebbe mai succedere.
      console.error("error");
    } else {
      const { id } = editDialogData;
      updateContact(id, editedContact).then(() => {
        getAllContacts().then((contactsList) => setContacts(contactsList));
        setEditContactDialogOpen(false);
      });
    }
  }, [editDialogData]);

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