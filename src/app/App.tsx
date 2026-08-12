import { RouterProvider } from 'react-router-dom'
import { ColorModeProvider } from '../theme/ColorModeProvider'
import { router } from './router'

export default function App() {
  return (
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  )
}