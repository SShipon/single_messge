import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import SingleMessage from '../components/SingleMessage'

const router = createBrowserRouter([
  { path: '/', element: <Layout /> },
  { path: '/message', element: <SingleMessage /> },
])

export default router
