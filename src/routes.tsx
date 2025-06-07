import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app.layout'
import { PatientsList } from '@/pages/patients-list/patients-list'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <PatientsList />,
      },
    ],
  },
])
