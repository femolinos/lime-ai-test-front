import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app.layout'
import { PatientNotes } from '@/pages/patient-notes/patient-notes'
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
      {
        path: '/patient/:patientId',
        element: <PatientNotes />,
      },
    ],
  },
])
