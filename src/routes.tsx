import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app.layout'
import { NoteDetails } from '@/pages/note-details/note-details'
import { NotesList } from '@/pages/notes-list/notes-list'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <NotesList />,
      },
      {
        path: '/note/:noteId',
        element: <NoteDetails />,
      },
    ],
  },
])
