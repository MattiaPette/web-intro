import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import type { ContactComponentProps } from './ContactsSection.model';

export default function ContactComponent({
  contacts,
  onDeleteContact,
  onEditContact,
  onAddContact,
}: ContactComponentProps) {
  return <Stack>
    <Button variant="contained" onClick={onAddContact} startIcon={<AddIcon />}>Add Contact</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telephone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.telephone}</TableCell>
              <TableCell>
                <IconButton color="primary" size='small' onClick={() => onEditContact(row.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" size='small' onClick={() => onDeleteContact(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Stack >
}