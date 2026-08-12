import {
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import type { ChangeEvent, SyntheticEvent } from 'react'
import type { SelectChangeEvent } from '@mui/material'
import type { FruitOption, GalleryFormState } from '../../types/gallery'

const FRUITS: FruitOption[] = [
  { label: 'Mela' },
  { label: 'Banana' },
  { label: 'Ciliegia' },
  { label: 'Mango' },
  { label: 'Kiwi' },
]

const PAYMENT_METHODS = [
  { value: 'card', label: 'Carta di credito' },
  { value: 'cash', label: 'Contanti' },
  { value: 'bank', label: 'Bonifico' },
]

export default function InputsSection({
  form,
  onChange,
}: {
  form: GalleryFormState
  onChange: (patch: Partial<GalleryFormState>) => void
}) {
  const handleText = (e: ChangeEvent<HTMLInputElement>) => onChange({ text: e.target.value })
  const handleMultiline = (e: ChangeEvent<HTMLInputElement>) =>
    onChange({ multiline: e.target.value })
  const handleSelect = (e: SelectChangeEvent) => onChange({ select: e.target.value })
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => onChange({ radio: e.target.value })
  const handleAutocomplete = (
    _event: SyntheticEvent,
    value: FruitOption | null,
  ) => onChange({ autocomplete: value })

  return (
    <Stack spacing={3} divider={<Divider flexItem />}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Button — varianti, colori e dimensioni
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button disabled>Disabilitato</Button>
          <Button variant="contained" color="secondary">
            Secondario
          </Button>
          <Button variant="outlined" color="error">
            Errore
          </Button>
          <Button variant="contained" size="small">
            Piccolo
          </Button>
          <ButtonGroup variant="contained" size="small">
            <Button>Uno</Button>
            <Button>Due</Button>
            <Button>Tre</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="subtitle2" color="text.secondary">
          Campi di testo e selezione
        </Typography>
        <TextField label="Testo" placeholder="Es. nome progetto" value={form.text} onChange={handleText} />
        <TextField
          label="Testo lungo"
          placeholder="Scrivi qui qualche riga..."
          multiline
          minRows={3}
          value={form.multiline}
          onChange={handleMultiline}
        />
        <FormControl>
          <InputLabel>Metodo di pagamento</InputLabel>
          <Select label="Metodo di pagamento" value={form.select} onChange={handleSelect}>
            {PAYMENT_METHODS.map((method) => (
              <MenuItem key={method.value} value={method.value}>
                {method.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Autocomplete
          options={FRUITS}
          getOptionLabel={(option) => option.label}
          value={form.autocomplete}
          onChange={handleAutocomplete}
          renderInput={(params) => <TextField {...params} label="Frutti (autocomplete)" />}
        />
      </Stack>

      <Stack spacing={2}>
        <Typography variant="subtitle2" color="text.secondary">
          Selettori e controllo numerico
        </Typography>
        <FormControl>
          <FormLabel>Metodo preferito</FormLabel>
          <RadioGroup row value={form.radio} onChange={handleRadio}>
            {PAYMENT_METHODS.map((method) => (
              <FormControlLabel
                key={method.value}
                value={method.value}
                control={<Radio />}
                label={method.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.checkboxChecked}
                onChange={(e) => onChange({ checkboxChecked: e.target.checked })}
              />
            }
            label="Accetto i termini"
          />
          <FormControlLabel
            control={
              <Switch
                checked={form.switchChecked}
                onChange={(e) => onChange({ switchChecked: e.target.checked })}
              />
            }
            label="Notifiche attive"
          />
        </FormGroup>
        <Stack spacing={1}>
          <Typography variant="body2">Valutazione: {form.rating ?? 'nessuna'}</Typography>
          <Rating
            value={form.rating}
            onChange={(_e, value) => onChange({ rating: value })}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2">Slider: {form.slider}%</Typography>
          <Slider
            value={form.slider}
            valueLabelDisplay="auto"
            onChange={(_e, value) => onChange({ slider: value as number })}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}