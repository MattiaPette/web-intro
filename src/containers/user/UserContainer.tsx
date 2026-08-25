import { Box, Typography } from "@mui/material";
import UserSectionComponent from "../../components/user/UserSection";
import { useCallback, useState } from "react";

export default function UserContainer() {
  const valoreIniziale = false;
  const [editEnabled, setEditEnabled] = useState(valoreIniziale);

  const handleAbilita = useCallback(() => setEditEnabled(true), []);
  const handleDisabilita = useCallback(() => setEditEnabled(false), []);
  const handleReset = useCallback(() => setEditEnabled(valoreIniziale), []);

  return <Box>
    <Typography variant="h3">User</Typography>
    <Typography variant="body1">Modifica permessa: {editEnabled ? "Abilitata" : "Disabilitata"}</Typography>
    <UserSectionComponent
      handleAbilitaClick={handleAbilita}
      handleDisabilitaClick={handleDisabilita}
      handleResetClick={handleReset}
    />
  </Box>
}