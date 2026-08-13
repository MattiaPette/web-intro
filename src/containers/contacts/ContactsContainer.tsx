import ContactComponent from '../../components/contacts/ContactsSection';
import type { Contact } from './contacts.model';
import Box from '@mui/material/Box';


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

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: 'auto' }}>
      <h1>Contacts</h1>
      <ContactComponent contacts={contactsMock} onDeleteContact={(id) => {
        console.log('Delete contact with id:', id);
      }} />
    </Box>
  )
}