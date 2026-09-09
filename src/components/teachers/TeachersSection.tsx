import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import type { TeachersSectionProps } from './TeachersSection.model.ts'

export default function TeachersSection({
  teachers,
  isLoading,
  error,
  isMutating,
  deletingTeacherId,
  onRetry,
  onAddTeacher,
  onEditTeacher,
  onDeleteTeacher,
}: TeachersSectionProps) {
  return (
    <Stack spacing={3} sx={{ p: { xs: 2, md: 4 }, maxWidth: 1100, mx: 'auto' }}>
      <Box>
        <Typography variant="h1" gutterBottom>
          Insegnanti
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Gestisci l&apos;elenco degli insegnanti, le materie e gli anni di esperienza.
        </Typography>
      </Box>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ justifyContent: 'space-between', gap: 2 }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
          Elenco insegnanti
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAddTeacher}
          disabled={isMutating}
          sx={{ alignSelf: { xs: 'stretch', sm: 'center' } }}
        >
          Aggiungi insegnante
        </Button>
      </Stack>

      {error && (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={onRetry}>
              Riprova
            </Button>
          }
        >
          {error}
        </Alert>
      )}

      {isLoading && (
        <Paper variant="outlined">
          <Stack spacing={2} sx={{ alignItems: 'center', p: 6 }}>
            <CircularProgress aria-label="Caricamento insegnanti" />
            <Typography color="text.secondary">Caricamento insegnanti...</Typography>
          </Stack>
        </Paper>
      )}

      {!isLoading && teachers.length === 0 && !error && (
        <Paper variant="outlined">
          <Stack
            spacing={2}
            sx={{ alignItems: 'center', p: { xs: 4, md: 6 }, textAlign: 'center' }}
          >
            <Typography variant="h6">Nessun insegnante presente</Typography>
            <Typography color="text.secondary">
              Inizia aggiungendo il primo insegnante all&apos;elenco.
            </Typography>
            <Button variant="outlined" startIcon={<AddIcon />} onClick={onAddTeacher}>
              Aggiungi insegnante
            </Button>
          </Stack>
        </Paper>
      )}

      {!isLoading && teachers.length > 0 && (
        <TableContainer component={Paper} variant="outlined">
          <Table sx={{ minWidth: 760 }} aria-label="Elenco insegnanti">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Cognome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Materia</TableCell>
                <TableCell>Anni di esperienza</TableCell>
                <TableCell align="right">Azioni</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((teacher) => {
                const isDeleting = deletingTeacherId === teacher.id

                return (
                  <TableRow key={teacher.id}>
                    <TableCell>{teacher.name}</TableCell>
                    <TableCell>{teacher.surname}</TableCell>
                    <TableCell>{teacher.email}</TableCell>
                    <TableCell>{teacher.subject}</TableCell>
                    <TableCell>{teacher.yearsOfExperience ?? 'Non indicati'}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="primary"
                        size="small"
                        aria-label={`Modifica ${teacher.name} ${teacher.surname}`}
                        onClick={() => onEditTeacher(teacher.id)}
                        disabled={isMutating}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        size="small"
                        aria-label={`Elimina ${teacher.name} ${teacher.surname}`}
                        onClick={() => onDeleteTeacher(teacher.id)}
                        disabled={isMutating}
                      >
                        {isDeleting ? <CircularProgress size={20} aria-label="Eliminazione in corso" /> : <DeleteIcon />}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Stack>
  )
}
