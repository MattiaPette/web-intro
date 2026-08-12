import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'

const PALETTE_SWATCHES = ['primary.main', 'secondary.main', 'success.main', 'warning.main', 'error.main', 'info.main']

export default function LayoutSection() {
  return (
    <Stack spacing={3} divider={<Divider flexItem />}>
      <Stack spacing={0.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Typography — la scala tipografica
        </Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Body 1 — testo corrente della pagina.</Typography>
        <Typography variant="body2" color="text.secondary">
          Body 2 — testo secondario e descrizioni.
        </Typography>
        <Typography variant="caption">Caption — annotazioni e note.</Typography>
        <Typography variant="overline">Overline — etichette.</Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Paper — elevazioni
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
          {[0, 1, 3, 6].map((elevation) => (
            <Paper key={elevation} elevation={elevation} sx={{ p: 2, minWidth: 110, textAlign: 'center' }}>
              <Typography variant="body2">Elevation {elevation}</Typography>
            </Paper>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Grid — layout responsive (cols: 1 → 2 → 3)
        </Typography>
        <Grid container spacing={2}>
          {PALETTE_SWATCHES.map((color) => (
            <Grid key={color} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  bgcolor: color,
                  color: 'background.paper',
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                {color}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Divider — separatori
        </Typography>
        <Typography variant="body2">Contenuto sopra la linea.</Typography>
        <Divider />
        <Typography variant="body2">Contenuto sotto la linea.</Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant="body2">Sinistra</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Destra</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}