import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import type { User } from "./user.model";
import type { UserDialogProps } from "./UserDialog.model";

export default function UserDialogComponent({
  open,
  onCancel,
  onSubmit,
  initialValue,
}: UserDialogProps) {
  return <Dialog open={open} onClose={onCancel}>
    <DialogTitle>Modifica Utente</DialogTitle>
    <DialogContent>
      <form id="user-form" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const formJson = Object
          .fromEntries((formData as any).entries()) as Omit<User, "id">;

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
      </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Chiudi</Button>
      <Button type="submit" form="user-form">
        Salva
      </Button>
    </DialogActions>
  </Dialog>
}