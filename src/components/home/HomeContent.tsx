import CodeIcon from '@mui/icons-material/Code'
import DevicesIcon from '@mui/icons-material/Devices'
import PaletteIcon from '@mui/icons-material/Palette'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const FEATURES = [
  {
    title: 'React + TypeScript',
    description: 'Vite, React 19 e TypeScript strict: configurazione moderna, veloce e tipizzata.',
    icon: <CodeIcon />,
  },
  {
    title: 'Material UI (MUI) v9',
    description: 'Tema personalizzabile, chiaro/scuro automatico e componenti pronti all\'uso.',
    icon: <PaletteIcon />,
  },
  {
    title: 'Containers / Components',
    description: 'Logica separata dalla presentazione: riutilizzabile anche per app mobile future.',
    icon: <DevicesIcon />,
  },
  {
    title: 'Installabile (PWA)',
    description: 'Installabile sul PC e sullo smartphone direttamente dal browser.',
    icon: <PhoneAndroidIcon />,
  },
]

export default function HomeContent({
  name,
  onNameChange,
}: {
  name: string
  onNameChange: (value: string) => void
}) {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h1" gutterBottom>
        Benvenuto{name ? `, ${name}` : ''}!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Questo è un template riutilizzabile per le tue web app: React, TypeScript e Material
        UI, con la logica separata in containers e la presentazione in componenti.
      </Typography>
      <Button variant="contained" size="large" onClick={() => navigate('/gallery')}>
        Esplora la galleria MUI
      </Button>

      <Alert severity="info" sx={{ mt: 3 }}>
        Il nome che scrivi qui sotto viene salvato in <b>localStorage</b> e persiste tra una
        sessione e l&apos;altra: è il hook <code>useLocalStorage</code> a gestire la logica.
      </Alert>

      <TextField
        label="Il tuo nome"
        placeholder="Scrivi il tuo nome..."
        value={name}
        fullWidth
        sx={{ mt: 3, maxWidth: 360 }}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {FEATURES.map((feature) => (
          <Grid key={feature.title} size={{ xs: 12, sm: 6 }}>
            <Card variant="outlined">
              <CardContent>
                <Box color="primary.main">{feature.icon}</Box>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}