import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import type { ContactsDialogProps } from "./ContactsDialog.model";
import type { Contact } from "../../containers/contacts/contacts.model";

export default function ContactsDialogComponent({
  open,
  title,
  initialValue,
  onCancel,
  onSubmit
}: ContactsDialogProps) {
  return <Dialog open={open} onClose={onCancel}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <form id="contact-form" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const formJson = Object
          .fromEntries((formData as any).entries()) as Omit<Contact, "id">;

        return onSubmit(formJson);
      }}>
        <TextField
          autoFocus
          required
          id="name"
          name="name"
          label="Nome"
          defaultValue={initialValue?.name}
          fullWidth
          variant="standard"
        />
        <TextField
          required
          id="surname"
          name="surname"
          label="Cognome"
          defaultValue={initialValue?.surname}
          fullWidth
          variant="standard"
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          type="email"
          defaultValue={initialValue?.email}
          fullWidth
          variant="standard"
        />
        <TextField
          required
          id="telephone"
          name="telephone"
          label="Numero di telefono"
          defaultValue={initialValue?.telephone}
          fullWidth
          variant="standard"
        />
      </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Cancel</Button>
      <Button type="submit" form="contact-form">
        Salva
      </Button>
    </DialogActions>
  </Dialog>
}
