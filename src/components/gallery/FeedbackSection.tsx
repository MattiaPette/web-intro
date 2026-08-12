import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import {
  Alert,
  AlertTitle,
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  LinearProgress,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'

const AVATAR_COLORS = ['#ef5350', '#42a5f5', '#66bb6a', '#ffa726']

export default function FeedbackSection({
  onShowSnackbar,
  onOpenDialog,
}: {
  onShowSnackbar: (message: string) => void
  onOpenDialog: () => void
}) {
  return (
    <Stack spacing={3} divider={<Divider flexItem />}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Alert — feedback in linea
        </Typography>
        <Alert severity="success">Operazione completata con successo</Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Aggiornamento disponibile alla versione 2.1.
        </Alert>
        <Alert severity="warning">Attenzione: spazio di archiviazione quasi pieno.</Alert>
        <Alert severity="error">Connessione persa, riprova tra qualche istante.</Alert>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Snackbar e Dialog — azioni temporanee
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
          <Button variant="contained" onClick={() => onShowSnackbar('Messaggio successo salvato!')}>
            Mostra snackbar
          </Button>
          <Button variant="outlined" color="info" onClick={() => onShowSnackbar('Info: azione registrata')}>
            Snackbar info
          </Button>
          <Button variant="outlined" color="error" onClick={() => onShowSnackbar('Errore simulato')}>
            Snackbar errore
          </Button>
          <Button variant="contained" color="secondary" onClick={onOpenDialog}>
            Apri dialog
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Progress e Skeleton — stati di caricamento
        </Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <CircularProgress />
          <CircularProgress color="success" size={32} />
          <CircularProgress color="secondary" size={24} />
          <LinearProgress sx={{ flexGrow: 1 }} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} sx={{ borderRadius: 1 }} />
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Avatar, Badge, Chip e Tooltip
        </Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Badge badgeContent={4} color="primary">
            <Avatar sx={{ bgcolor: AVATAR_COLORS[0] }}>M</Avatar>
          </Badge>
          {['A', 'B', 'C'].map((letter, index) => (
            <Avatar key={letter} sx={{ bgcolor: AVATAR_COLORS[index + 1] }}>
              {letter}
            </Avatar>
          ))}
          <Box>
            <Chip label="Stato: attivo" color="success" size="small" sx={{ mr: 1 }} />
            <Chip label="In revisione" color="warning" size="small" />
          </Box>
          <Tooltip title="Questo è un tooltip">
            <Button variant="outlined" size="small" startIcon={<ThumbUpIcon />}>
              Hover qui
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  )
}