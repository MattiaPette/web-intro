import { useCallback, useState } from "react";
import { Stack, Typography } from "@mui/material";
import UserSectionComponent from "../../components/user/UserSection";
import UsernameTextComponent from "../../components/user/UserNameText";

export default function UserContainer() {
  const valoreIniziale = false;
  const initialUsername = "mariorossi";
  const [editEnabled, setEditEnabled] = useState(valoreIniziale);
  const [username, setUsername] = useState<string>(initialUsername);

  const handleAbilita = useCallback(() => setEditEnabled(true), []);
  const handleDisabilita = useCallback(() => setEditEnabled(false), []);
  const handleReset = useCallback(() => setEditEnabled(valoreIniziale), []);
  const handleUsernameChange = useCallback((s: string) => setUsername(s), []);

  return <Stack spacing={2}>
    <Typography variant="h3">User: {username}</Typography>
    <Typography variant="body1">Modifica permessa: {editEnabled ? "Abilitata" : "Disabilitata"}</Typography>
    <UserSectionComponent
      handleAbilitaClick={handleAbilita}
      handleDisabilitaClick={handleDisabilita}
      handleResetClick={handleReset}
    />
    <UsernameTextComponent initialValue={initialUsername} handleUsernameChange={handleUsernameChange} />
  </Stack >
}