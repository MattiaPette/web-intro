import { Box, Toolbar } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar, { DRAWER_WIDTH } from './Sidebar'
import TopBar from './TopBar'

export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <TopBar onMenuClick={() => setMobileOpen(true)} />
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Box
        component="main"
        sx={{ flexGrow: 1, height: '100%', overflow: 'auto', width: { md: `calc(100% - ${DRAWER_WIDTH}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}