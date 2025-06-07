import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'

import { NewNoteModal } from './new-note-modal'

export function PatientsList() {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="my-2 flex w-full max-w-4xl flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Patients</h1>
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
            onClick={() => navigate('#')}
          >
            <TableCell>Patient 1</TableCell>
            <TableCell>Preview 1</TableCell>
            <TableCell>Created At 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <NewNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
