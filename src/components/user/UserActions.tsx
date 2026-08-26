import { Button, Stack } from "@mui/material";
import type { UserActionsProps } from "./UserActions.model";

export default function UserActionsComponent({
  onEditUserClick,
  onResetUserClick
}: UserActionsProps) {
  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={onEditUserClick}>Modifica Utente</Button>
      <Button variant="contained" onClick={onResetUserClick} color="warning">Reset dati</Button>
    </Stack>
  )
}