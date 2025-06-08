import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { createNote } from '@/api/create-note'
import { fetchPatients } from '@/api/fetch-patients'
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components'

interface NewNoteModalProps {
  isOpen: boolean
  onClose: () => void
}

const createNoteSchema = z.object({
  patientId: z.string({ message: 'Patient is required' }),
  audio: z
    .instanceof(File, { message: 'Audio file is required' })
    .refine((file) => file.type.startsWith('audio/'), {
      message: 'File not supported',
    }),
})

type CreateNoteSchema = z.infer<typeof createNoteSchema>

export function NewNoteModal({ isOpen, onClose }: NewNoteModalProps) {
  const navigate = useNavigate()

  const { data: patients } = useQuery({
    queryKey: ['patients'],
    queryFn: fetchPatients,
  })

  const { mutateAsync: createNoteMutation, isPending } = useMutation({
    mutationFn: createNote,
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
  })

  async function submitCreateNoteForm(data: CreateNoteSchema) {
    const note = await createNoteMutation(data)

    if (!note) {
      toast.error('Failed to create note')
      return
    }

    toast.success('Note created successfully')
    onClose()
    navigate(`/note/${note.id}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={isPending ? undefined : onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note</DialogTitle>
        </DialogHeader>

        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(submitCreateNoteForm)}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="patientId">Patient</Label>
            <Controller
              name="patientId"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <>
                  <Select name={name} value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a patient" />
                    </SelectTrigger>
                    <SelectContent>
                      {patients?.map((patient) => (
                        <SelectItem key={patient.id} value={patient.id}>
                          {patient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.patientId && (
                    <p className="text-sm text-red-500">
                      {errors.patientId.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Upload audio file</Label>
            <Controller
              name="audio"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <div className="relative">
                  <Input
                    type="file"
                    accept="audio/*"
                    name={name}
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        onChange(file)
                      }
                    }}
                    className="absolute inset-0 w-full cursor-pointer opacity-0"
                  />
                  <button
                    type="button"
                    className={`w-full rounded-md border bg-white px-4 py-2 text-sm font-medium text-black ${
                      errors.audio ? 'border-red-500' : 'border-input'
                    }`}
                  >
                    {value?.name || 'Upload'}
                  </button>
                  {errors.audio && (
                    <p className="text-sm text-red-500">
                      {errors.audio.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <Button type="submit" disabled={isPending}>
            {isPending ? 'Creating...' : 'Create Note'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
