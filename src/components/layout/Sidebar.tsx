import HomeIcon from '@mui/icons-material/Home'
import PaletteIcon from '@mui/icons-material/Palette'
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const DRAWER_WIDTH = 240

interface NavItem {
  label: string
  path: string
  icon: ReactNode
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'Gallery MUI', path: '/gallery', icon: <PaletteIcon /> },
]

export default function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean
  onClose: () => void
}) {
  return (
    <Box component="nav" aria-label="navigazione principale" sx={{ width: { md: DRAWER_WIDTH } }}>
      <DrawerContent
        open={mobileOpen}
        variant="temporary"
        onClose={onClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      />
      <DrawerContent variant="permanent" sx={{ display: { xs: 'none', md: 'block' } }} />
    </Box>
  )
}

function DrawerContent({
  open,
  onClose,
  variant,
  sx,
}: {
  open?: boolean
  onClose?: () => void
  variant: 'temporary' | 'permanent'
  sx: SxProps<Theme>
}) {
  const navigate = useNavigate()
  const location = useLocation()

  const nav = (path: string) => {
    navigate(path)
    onClose?.()
  }

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        ...sx,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'background.default',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.path}
              selected={location.pathname === item.path}
              onClick={() => nav(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}