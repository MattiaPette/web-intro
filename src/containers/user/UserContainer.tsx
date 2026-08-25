import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import type { User } from "../../components/user/user.model";
import UserActionsComponent from "../../components/user/UserActions";

export default function UserContainer() {
  const initialData: User = {
    id: 1,
    name: "Mario",
    surname: "Rossi",
    email: "mario.rossi@example.com"
  }

  const [user, setUser] = useState<User>(initialData);

  return <Stack spacing={2}>
    <Typography variant="body1">Nome: {user.name}</Typography>
    <Typography variant="body1">Cognome: {user.surname}</Typography>
    <Typography variant="body1">Email: {user.email}</Typography>
    <UserActionsComponent />
  </Stack >
}