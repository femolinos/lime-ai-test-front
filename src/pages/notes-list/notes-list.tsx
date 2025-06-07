import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

import { NewNoteModal } from './new-note-modal'

export function NotesList() {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="my-2 flex w-full max-w-4xl flex-col gap-4">
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Patient Notes</h1>
            <Button onClick={() => setIsModalOpen(true)}>New Note</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                className="hover:bg-muted/50 cursor-pointer"
                onClick={() => navigate('/note/1')}
              >
                <TableCell>Patient 1</TableCell>
                <TableCell>Preview 1</TableCell>
                <TableCell>Created At 1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <NewNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
