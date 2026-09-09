import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import type { TeacherFormData, TeachersDialogProps } from './TeachersDialog.model.ts'
import type { SubmitEvent } from 'react';

export default function TeachersDialog({
  open,
  title,
  initialValue,
  isSubmitting,
  onCancel,
  onSubmit,
}: TeachersDialogProps) {
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const yearsOfExperience = formData.get('yearsOfExperience')?.toString().trim() ?? ''
    const teacher: TeacherFormData = {
      name: formData.get('name')?.toString().trim() ?? '',
      surname: formData.get('surname')?.toString().trim() ?? '',
      email: formData.get('email')?.toString().trim() ?? '',
      subject: formData.get('subject')?.toString().trim() ?? '',
      ...(yearsOfExperience ? { yearsOfExperience: Number(yearsOfExperience) } : {}),
    }

    onSubmit(teacher)
  }

  return (
    <Dialog
      open={open}
      onClose={isSubmitting ? undefined : onCancel}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Stack
          component="form"
          id="teacher-form"
          key={initialValue?.id ?? 'new-teacher'}
          spacing={2}
          onSubmit={handleSubmit}
          sx={{ pt: 1 }}
        >
          <TextField
            autoFocus
            required
            id="teacher-name"
            name="name"
            label="Nome"
            defaultValue={initialValue?.name ?? ''}
            fullWidth
          />
          <TextField
            required
            id="teacher-surname"
            name="surname"
            label="Cognome"
            defaultValue={initialValue?.surname ?? ''}
            fullWidth
          />
          <TextField
            required
            id="teacher-email"
            name="email"
            label="Email"
            type="email"
            defaultValue={initialValue?.email ?? ''}
            fullWidth
          />
          <TextField
            required
            id="teacher-subject"
            name="subject"
            label="Materia"
            defaultValue={initialValue?.subject ?? ''}
            fullWidth
          />
          <TextField
            id="teacher-years-of-experience"
            name="yearsOfExperience"
            label="Anni di esperienza"
            type="number"
            defaultValue={initialValue?.yearsOfExperience ?? ''}
            slotProps={{ htmlInput: { min: 0, step: 1 } }}
            helperText="Campo opzionale"
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} disabled={isSubmitting}>
          Annulla
        </Button>
        <Button type="submit" form="teacher-form" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={22} color="inherit" aria-label="Salvataggio in corso" /> : 'Salva'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
