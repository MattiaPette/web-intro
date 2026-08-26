import { useCallback, useState } from "react";
import { Stack, Typography } from "@mui/material";
import type { User } from "../../components/user/user.model";
import UserActionsComponent from "../../components/user/UserActions";
import UserDialogComponent from "../../components/user/UserDialog";

export default function UserContainer() {
  const initialData: User = {
    id: 1,
    name: "Mario",
    surname: "Rossi",
    email: "mario.rossi@example.com"
  }

  const [user, setUser] = useState<User>(initialData);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);

  const handleEditUserClick = useCallback(() => {
    setEditDialogOpen(true);
  }, []);

  const handleUserDialogCancel = useCallback(() => {
    setEditDialogOpen(false);
  }, []);

  const handleUserDialogSubmit = useCallback((editedUser: Omit<User, "id">) => {
    setUser({ ...user, ...editedUser });
    setEditDialogOpen(false);
  }, [user]);

  const handleResetUserClick = useCallback(() => {
    setUser(initialData);
  }, []);

  return <Stack spacing={2}>
    <Typography variant="body1">Nome: {user.name}</Typography>
    <Typography variant="body1">Cognome: {user.surname}</Typography>
    <Typography variant="body1">Email: {user.email}</Typography>

    <UserActionsComponent
      onEditUserClick={handleEditUserClick}
      onResetUserClick={handleResetUserClick} />

    <UserDialogComponent
      open={isEditDialogOpen}
      initialValue={user}
      onCancel={handleUserDialogCancel}
      onSubmit={handleUserDialogSubmit} />
  </Stack >
}