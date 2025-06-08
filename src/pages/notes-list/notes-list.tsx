import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import moment from 'moment'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchNotes } from '@/api/fetch-notes'
import {
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'
import { truncateText } from '@/lib/utils'

import { NewNoteModal } from './new-note-modal'

export function NotesList() {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: notes, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    )
  }

  return (
    <div className="my-2 flex w-full max-w-4xl flex-col gap-4">
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Patient Notes</h1>
            <Button onClick={() => setIsModalOpen(true)}>New Note</Button>
          </div>

          {notes && notes.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Preview</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notes?.map((note) => (
                  <TableRow
                    key={note.id}
                    className="hover:bg-muted/50 cursor-pointer"
                    onClick={() => navigate(`/note/${note.id}`)}
                  >
                    <TableCell>{note.patient.name}</TableCell>
                    <TableCell>{truncateText(note.summary, 50)}</TableCell>
                    <TableCell>
                      {moment(note.createdAt).format('MM/DD/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-lg">No notes found :(</p>
          )}
        </CardContent>
      </Card>

      <NewNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
