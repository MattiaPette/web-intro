import { Navigate, createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import GalleryContainer from '../containers/gallery/GalleryContainer'
import HomeContainer from '../containers/home/HomeContainer'
import NotFoundContainer from '../containers/notFound/NotFoundContainer'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomeContainer /> },
      { path: 'gallery', element: <GalleryContainer /> },
      { path: '404', element: <NotFoundContainer /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
])