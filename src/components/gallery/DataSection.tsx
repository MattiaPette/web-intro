import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import type { ReactNode } from 'react'

const ORDER_STEPS = ['Catalogo', 'Ordine', 'Pagamento']

const PRODUCTS = [
  { name: 'Notebook Pro 14"', category: 'Informatica', price: '1.249,00 €', status: 'Disponibile', color: 'success' },
  { name: 'Monitor 27" 4K', category: 'Periferiche', price: '429,00 €', status: 'Basso stock', color: 'warning' },
  { name: 'Tastiera meccanica', category: 'Periferiche', price: '89,90 €', status: 'Disponibile', color: 'success' },
  { name: 'Webcam Full HD', category: 'Periferiche', price: '59,90 €', status: 'Esaurito', color: 'error' },
] as const

const FAQ_ITEMS: { title: string; body: string }[] = [
  {
    title: 'Come si installa la PWA?',
    body: 'Apri l\'app nel browser e usa il pulsante "Installa" (icona nella barra degli indirizzi su Chrome/Edge).',
  },
  {
    title: 'Dove metto la logica di business?',
    body: 'Nei containers (src/containers): lì vanno stato, fetch e orizzontazioni. I componenti restano puri.',
  },
  {
    title: 'Come aggiungo una nuova pagina?',
    body: 'Crea container + componenti, poi registra la rotta in src/app/router.tsx.',
  },
]

function statusChip(status: string, color: string): ReactNode {
  return <Chip label={status} size="small" color={color as 'success' | 'warning' | 'error'} />
}

export default function DataSection({
  stepperStep,
  onStepperBack,
  onStepperNext,
}: {
  stepperStep: number
  onStepperBack: () => void
  onStepperNext: () => void
}) {
  return (
    <Stack spacing={3} divider={<Divider flexItem />}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Table — dati tabellari
        </Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table size="small" aria-label="tabella prodotti di esempio">
            <TableHead>
              <TableRow>
                <TableCell>Prodotto</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Prezzo</TableCell>
                <TableCell align="right">Stato</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PRODUCTS.map((product) => (
                <TableRow key={product.name}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell align="right">{statusChip(product.status, product.color)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Stepper — flusso guidato
        </Typography>
        <Stepper activeStep={stepperStep} alternativeLabel>
          {ORDER_STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button size="small" disabled={stepperStep === 0} onClick={onStepperBack}>
            Indietro
          </Button>
          <Button
            size="small"
            variant="contained"
            disabled={stepperStep === ORDER_STEPS.length - 1}
            onClick={onStepperNext}
          >
            Avanti
          </Button>
        </Box>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Accordion — contenuto espandibile
        </Typography>
        {FAQ_ITEMS.map((item, index) => (
          <Accordion key={item.title} defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>{item.title}</AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          List — elenchi
        </Typography>
        <List sx={{ width: '100%', maxWidth: 420, bgcolor: 'background.paper' }} subheader={<ListSubheader>Utenti attivi</ListSubheader>}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>MR</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Mario Rossi" secondary="mario.rossi@example.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>LB</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Luca Bianchi" secondary="luca.bianchi@example.com" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  )
}