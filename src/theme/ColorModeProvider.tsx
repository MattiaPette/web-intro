import { useEffect, useMemo, type ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { BRAND_COLOR, getTheme } from './theme'
import { ColorModeContext, type ColorMode } from './useColorMode'

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useLocalStorage<ColorMode>('ui.theme', () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    meta?.setAttribute('content', mode === 'dark' ? '#121212' : BRAND_COLOR)
  }, [mode])

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode, setMode],
  )

  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}