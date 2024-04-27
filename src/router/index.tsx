import Discover from '@/views/discover'
import Download from '@/views/download'
import Focus from '@/views/focus'
import Mine from '@/views/mine'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
