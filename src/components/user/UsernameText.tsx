import { TextField } from "@mui/material";
import type { UsernameTextProps } from "./UsernameText.model";

export default function UsernameTextComponent({
  initialValue,
  handleUsernameChange
}: UsernameTextProps) {
  return <TextField
    label="Username"
    variant="standard"
    defaultValue={initialValue}
    onChange={(e) => handleUsernameChange(e.target.value)}
  />
}
