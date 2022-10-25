import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Server from '../components/Server'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'server/:id',
        element: <Server />,
      },
    ],
  },
])

export default router
