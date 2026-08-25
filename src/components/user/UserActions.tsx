import { Button, Stack } from "@mui/material";

export default function UserActionsComponent() {
  return (
    <Stack spacing={2}>
      <Button variant="contained">Modifica Utente</Button>
      <Button variant="contained" color="warning">Reset dati</Button>
    </Stack>
  )
}