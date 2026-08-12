import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Tooltip, Typography, useTheme } from '@mui/material'
import { useColorMode } from '../../theme/useColorMode'

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const theme = useTheme()
  const { mode, toggleColorMode } = useColorMode()

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ zIndex: (t) => t.zIndex.drawer + 1, bgcolor: 'background.paper', color: 'text.primary' }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="apri menu"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Web Intro
        </Typography>
        <Tooltip title={mode === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro'}>
          <IconButton aria-label="cambia tema" onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? (
              <Brightness7Icon sx={{ color: theme.palette.primary.main }} />
            ) : (
              <Brightness4Icon sx={{ color: theme.palette.primary.main }} />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}