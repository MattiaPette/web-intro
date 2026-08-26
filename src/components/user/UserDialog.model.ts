import type { User } from "./user.model";

export type UserDialogProps = {
  open: boolean;
  initialValue: Omit<User, 'id'>;
  onCancel: () => void;
  onSubmit: (editedUser: Omit<User, 'id'>) => void;
}