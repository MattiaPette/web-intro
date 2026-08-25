import { Navigate, createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import GalleryContainer from '../containers/gallery/GalleryContainer'
import HomeContainer from '../containers/home/HomeContainer'
import NotFoundContainer from '../containers/notFound/NotFoundContainer'
import ContactsContainer from '../containers/contacts/ContactsContainer'
import UserContainer from '../containers/user/UserContainer'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomeContainer /> },
      { path: 'gallery', element: <GalleryContainer /> },
      { path: 'contacts', element: <ContactsContainer /> },
      { path: 'user', element: <UserContainer /> },
      { path: '404', element: <NotFoundContainer /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
])