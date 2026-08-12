import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFoundContainer() {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5" gutterBottom>
        Pagina non trovata
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        La pagina che stai cercando non esiste o è stata spostata.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Torna alla Home
      </Button>
    </Box>
  )
}