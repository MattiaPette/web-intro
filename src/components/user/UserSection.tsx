import { Stack, Button } from '@mui/material'
import type { UserSectionProps } from './UserSection.model';

export default function UserSectionComponent({
  handleAbilitaClick,
  handleDisabilitaClick,
  handleResetClick,
}: UserSectionProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleAbilitaClick}>Abilita</Button>
      <Button variant="contained" onClick={handleDisabilitaClick}>Disabilita</Button>
      <Button variant="contained" onClick={handleResetClick}>Reset</Button>
    </Stack>
  );
}