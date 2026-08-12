import { createTheme } from '@mui/material/styles'

export const BRAND_COLOR = '#6366f1'

/**
 * Tema MUI costruito in base alla modalità (chiaro/scuro).
 * Personalizza qui palette, tipografia, spaziature e componenti.
 */
export function getTheme(mode: 'light' | 'dark') {
  return createTheme({
    palette: {
      mode,
      primary: { main: BRAND_COLOR },
      secondary: { main: '#8b5cf6' },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      h1: { fontWeight: 700, letterSpacing: '-0.02em' },
      h2: { fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
    },
  })
}